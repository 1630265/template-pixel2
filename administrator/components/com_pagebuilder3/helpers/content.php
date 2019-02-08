<?php
/**
 * @version    $Id$
 * @package    JSN_PageBuilder3
 * @author     JoomlaShine Team <support@joomlashine.com>
 * @copyright  Copyright (C) 2012 JoomlaShine.com. All Rights Reserved.
 * @license    GNU/GPL v2 or later http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Websites: http://www.joomlashine.com
 * Technical Support:  Feedback - http://www.joomlashine.com/contact-us/get-support.html
 */

// No direct access to this file
defined('_JEXEC') or die('Restricted access');
include_once JPATH_ROOT . '/components/com_content/helpers/route.php';

/**
 * JSN PageBuilder3 content helper.
 *
 * @package  JSN_PageBuilder3
 * @since    1.0.0
 */
class JSNPageBuilder3ContentHelper
{
    /**
     * @param array $params
     *
     * @return array
     */
    public static function getArticles($params)
    {
        if (isset($params)) {

            JLoader::import('joomla.application.component.model');
            JModelLegacy::addIncludePath(JPATH_SITE . '/components/com_content/models', 'ContentModel');

            $model = JModelLegacy::getInstance('Articles', 'ContentModel');
            $model->getState();

            $model->setState('list.limit', isset($params->limit) ? $params->limit : 10);
            $model->setState('filter.published', 1);
            if (isset($params->category)) {

                $model->setState('filter.catid', $params->category);
            }
            $articleList = $model->getItems();

            foreach ($articleList as $key => $article) {
                $articleList[$key]->direct_link = JRoute::_(ContentHelperRoute::getArticleRoute($articleList[$key]->id, $articleList[$key]->catid));
            }

            return $articleList;
        }

    }

    public static function fetchHttp($url)
    {
        $result = '';

        // Initialize HTTP client
        class_exists('http_class')
        OR require_once JPATH_ROOT . "/administrator/components/com_pagebuilder3/libraries/3rd-party/httpclient/http.php";

        $http = new http_class;
        $http->follow_redirect = 1;
        $http->redirection_limit = 5;
        $http->prefer_curl = 1;
        $http->GetRequestArguments($url, $arguments);

        // Open connection
        if (($error = $http->Open($arguments)) == '') {
            if (($error = $http->SendRequest($arguments)) == '') {
                // Get response body
                while (true) {
                    if (($error = $http->ReadReplyBody($body, 1000)) != '' OR strlen($body) == 0) {
                        break;
                    }
                    $result .= $body;
                }
            } else {
                return 'Error while requesting: ' . $url;
            }

            // Close connection
            $http->Close();
        } else {
            return 'Error while requesting: ' . $url;
        }

        return $result;
    }


    public static function insertArticles($path)
    {
        $db = JFactory::getDbo();

        // Read XML file
        $xmlFiles = glob("{$path}/*.xml");
        $countInserted = 0;
        if (count($xmlFiles) > 0) {
            $xml = simplexml_load_file(current($xmlFiles), 'SimpleXMLElement', LIBXML_NOCDATA);
            $pb3Articles = array();
            // Get content articles path in XML File to array of articles
            foreach ($xml->xpath("//extension[@name='content']/task/parameters/parameter") as $v) {
                foreach (json_decode(json_encode($v), true) as $c) {
                    if (strpos((string)$c, 'INSERT INTO') !== false && (strpos((string)$c, '<!-- Start PageBuilder Data|') !== false || strpos((string)$c, '<!-- Start New PageBuilder Data|') !== false)) {
                        $pb3Articles[] = $c;
                    }
                }
            }
            // Remove id value in SQL syntax to make it auto increment.
            foreach ($pb3Articles as $i => $article) {
                $articleArr = explode(',', $article);
                foreach ($articleArr as $k => $v) {
                    if (strpos($v, ' VALUES (\'') !== false) {
                        $articleArr[$k] = preg_replace('/\d/', '', $v);
                    };
                }
                $pb3Articles[$i] = join(',', $articleArr);
            }


            // Insert each Articles to database
            foreach ($pb3Articles as $article) {
                $db->setQuery($article);
                $result = $db->execute();
                $id = $db->insertid();
                if ($result !== false) {
                    $db->setQuery('UPDATE #__content SET `state` = 1 WHERE `id` = ' . $id);
                    $db->execute();
                    $countInserted++;
                }
            }
        }

        return $countInserted;
    }


    public function delete($value, $key, $table)
    {
        $db = JFactory::getDbo();
        $query = $db->getQuery(true);
        $condition = $db->quoteName($key) . ' = ' . $db->quote($value);
        $query->delete($db->quoteName($table));
        $query->where($condition);
        $db->setQuery($query);

        return $db->execute();
    }


    public function create($columns, $values, $table)
    {
        $db = JFactory::getDbo();
        $query = $db->getQuery(true);
        $query
            ->insert($db->quoteName($table))
            ->columns($db->quoteName($columns))
            ->values(implode(',', $values));
        $db->setQuery($query);
        return array($db->execute(), $db->insertid());
    }


    public function update($fields, $conditions, $table)
    {
        $db = JFactory::getDbo();
        $query = $db->getQuery(true);
        $query->update($db->quoteName($table))->set($fields)->where($conditions);
        $db->setQuery($query);

        return $db->execute();
    }


    public function select($fields, $table, $where = null, $selectOne = false)
    {
        $db = JFactory::getDbo();
        $query = $db->getQuery(true);
        $query->select($fields);
        $query->from($db->quoteName($table));
        !empty($where) AND $query->where($where);
        $db->setQuery($query);
        return $selectOne ? $db->loadObject() : $db->loadObjectList();
    }

}
