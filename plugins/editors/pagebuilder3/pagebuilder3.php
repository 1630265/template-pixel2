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

/**
 * JSN PageBuilder3 editor plugin.
 *
 * @package  JSN_PageBuilder3
 * @since    1.0.0
 */
class PlgEditorPageBuilder3 extends JPlugin
{
    /**
     * Affects constructor behavior. If true, language files will be loaded automatically.
     *
     * @var    boolean
     * @since  12.3
     */
    protected $autoloadLanguage = true;
    protected $supportedArea = array('jform_articletext', 'jform_content');

    /**
     * Initialises the Editor.
     *
     * @return  void
     */
    public function onInit()
    {
        static $initialized;

        // Initialize the editor only once.
        if (!$initialized) {
//            defined('PAGEFLY_VERSION') OR define('PAGEFLY_VERSION', '1.2.6');

            // PageBuilder shall have its own group of plugins to modify and extend its behavior.
//			$plugins = JPluginHelper::importPlugin('pagebuilder3');
            $dispatcher = JEventDispatcher::getInstance();

            // Trigger an event to allow 3rd-party plugins do pre-init actions.
            $dispatcher->trigger('onPageBuilderBeforeInit', array(&$this->params));

//			$displayData = ( object )array('params' => $this->params);

            // We need to do output buffering here because layouts may actually 'echo' things which we do not want.

            JHTML::_('behavior.modal');
            // Polyfill for old browser
            // Load required stylesheets.
            JSNHtmlAsset::addStyle('//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/components/icon.min.css');
            JSNHtmlAsset::addStyle('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
            JSNHtmlAsset::addStyle(JUri::root() . "plugins/system/jsnframework/assets/3rd-party/bootstrap4/css/bootstrap.min.css");
            JSNHtmlAsset::addStyle(JUri::root() . "plugins/system/jsnframework/assets/joomlashine/css/jsn-override.css");


            // Trigger an event to allow 3rd-party plugins do post-init actions.
            $dispatcher->trigger('onPageBuilderAfterInit', array(&$this->params));

            // State that the editor is initialized.
            $initialized = true;



//            defined('JSNPB3_EDITOR_AVAILABLE') || define('JSNPB3_EDITOR_AVAILABLE', true);


        }
    }

    /**
     * Get the editor content.
     *
     * @param   string $id The id of the editor field.
     *
     * @return  string
     */
    public function onGetContent($id)
    {
        return sprintf('document.getElementById(%1$s).value', json_encode((string) $id));
    }


    private function canIUsePB($id, $option, $view = '')
    {
        return in_array($id, $this->supportedArea)
            || (
                !empty($option)
                && (
                    ($option === 'com_k2' && $id === 'text')
                    || $option === 'com_jsnportfolio'
                    || ($option === 'com_virtuemart' && ($id === 'product_desc' || $id === 'category_description'))
                    || ($option === 'com_djcatalog2' && $id === 'jform_description' && $view === 'item')
//					|| ($id === 'content' && $option === 'com_easyblog')
                    || ($id === 'jform_articletext' && $option === 'com_hikashop')
                    || ($id === 'jform_fulltext' && $option === 'com_digicom')
                    || (($id === 'refField_introtext' || $id === 'refField_content') && $option === 'com_falang')
                )
            );
    }


    /**
     * Display the editor area.
     *
     * @param   string $name The control name.
     * @param   string $content The contents of the text area.
     * @param   string $width The width of the text area (px or %).
     * @param   string $height The height of the text area (px or %).
     * @param   int $col The number of columns for the textarea.
     * @param   int $row The number of rows for the textarea.
     * @param   boolean $buttons True and the editor buttons will be displayed.
     * @param   string $id An optional ID for the textarea (note: since 1.6). If not supplied the name is used.
     * @param   string $asset Not used.
     * @param   object $author Not used.
     * @param   array $params Associative array of editor parameters.
     *
     * @return  string  HTML
     */
    public function onDisplay($name, $content, $width, $height, $col, $row, $buttons = true, $id = null, $asset = null, $author = null, $params = array())
    {
        $id = empty($id) ? $name : $id;

        // Must pass the field id to the buttons in this editor.
        $buttons = $this->displayButtons($id, $buttons, $asset, $author);

        // Options for the CodeMirror constructor.
        $options = new stdClass;

        $displayData = ( object )array(
            'id' => $id,
            'name' => $name,
            'cols' => $col,
            'rows' => $row,
            'params' => $this->params,
            'options' => $options,
            'buttons' => $buttons,
            'content' => $content,
            'width' => $width,
            'height' => $height
        );
        // Get event dispatcher.
        $dispatcher = JEventDispatcher::getInstance();

        // Trigger an event to allow 3rd-party plugins to customize display data.
        $results = $dispatcher->trigger('onPageBuilderBeforeDisplay', array(&$displayData));

        // Render the editor.
        $app = JFactory::getApplication();
        $option = $app->input->get('option');

        $active = JFactory::getConfig()->get('editor');
        $isOldContent = $this->isOldContent($content);
        if ($isOldContent) {
            if ($active === 'pagebuilder3') {
                $app->enqueueMessage('This page was created by JSN PageBuilder 2, and it can be convert to JSN PageBuilder 3 data, if you really want to convert, please click Edit and Save this article!', 'notice');
            } else {
                $app->enqueueMessage('This page was created by JSN PageBuilder 2, and it can be convert to JSN PageBuilder 3 data, if you really want to convert, <a href="#" id="pb-switch-pagebuilder3" class="btn btn-small btn-primary"> click here</a> to switch to JSN PageBuilder 3', 'notice');
            }

        }
        $active = JFactory::getConfig()->get('editor');
        $jversion = new JVersion();
        $ver = $jversion->getShortVersion();
        $isJoomla37 = version_compare($ver, '3.7', '>=');
        $mediaRoot = '/images';
        if (class_exists('JSNConfigHelper')) {
            $config = JSNConfigHelper::get('pagebuilder3');
            $mediaFolder = $config->get('media_root_folder');
            $mediaRoot = !empty($mediaFolder) ? $mediaFolder : '/';
        }

        $results[] = ' <script type="text/javascript">
	          window.pb_textarea_id = "' . $id . '";
	          window.pagefly_data = window.pb2_editor_data = window.pb_editor_data = ' . json_encode(array(
                'baseURL' => JUri::root(),
                'current_editor' => $active,
                'isNewContent' => $this->isNewContent($content),
                'page_id' => $this->getPageId(),
                'token' => JSession::getFormToken(),
                'isSite' => $app->isSite(),
                'component' => $option,
                'isJoomla37' => $isJoomla37,
                'isOldContent' => $isOldContent,
                'media_root_folder' => $mediaRoot
            )) . ';
</script>';

        if (!$this->canIUsePB($id, $option, $app->input->get('view', ''))) {
            $app->enqueueMessage('This component or your browser was not supported to edit with JSN PageBuilder 3, so the default editor will be loaded.', 'warning');
            include_once JPATH_ROOT . '/plugins/editors/none/none.php';
            $noneEditor = new PlgEditorNone($this);
            $results[] = $noneEditor->onDisplay($name, $content, $width, $height, $col, $row, $buttons, $id, $asset, $author, $params);
        } else {
            $results[] = '<textarea id="' . $id . '" name="' . $name . '"
	          style="display: none;">' . $content . '</textarea>
	          ';
            JHtml::script(JURI::root() . 'plugins/editors/pagebuilder3/assets/app/vendor.js');
            JHtml::script(JURI::root() . 'plugins/editors/pagebuilder3/assets/app/core/' . PAGEFLY_VERSION . '/main.js');
        }


        foreach ($dispatcher->trigger('onPageBuilderAfterDisplay', array(&$displayData)) as $result) {
            $results[] = $result;
        }


        return implode("\n", $results);
    }

    /**
     * Check Article is new content or not.
     * @return bool
     * @since 1.1.0
     */
    private function isNewContent($content)
    {

        return strlen((string)$content) < 2;
    }

    /**
     * get the article id
     * @return int | null
     * @since 1.1.0
     */
    private function getPageId()
    {
        $jinput = JFactory::getApplication()->input;

        return $jinput->getString('id') !== '' ? $jinput->getString('id') : ($jinput->getString('cid') !== '' ? $jinput->getString('cid') : ($jinput->getString('a_id') !== '' ? $jinput->getString('a_id') : ($jinput->getString('virtuemart_product_id') ? $jinput->getString('virtuemart_product_id') : null)));
    }


    private function isOldContent($content)
    {

        return strpos($content, 'Start PageBuilder Data') !== false || strpos($content, 'Start New PageBuilder Data') !== false;
    }

    public function attach($subject)
    {
    }

    /**
     * Displays the editor buttons.
     *
     * @param   string $name Button name.
     * @param   mixed $buttons [array with button objects | boolean true to display buttons]
     * @param   mixed $asset Unused.
     * @param   mixed $author Unused.
     *
     * @return  string  HTML
     */
    protected function displayButtons($name, $buttons, $asset, $author)
    {
        $return = '';

        $args = array(
            'name' => $name,
            'event' => 'onGetInsertMethod'
        );

        $results = ( array )$this->update($args);

        if ($results) {
            foreach ($results as $result) {
                if (is_string($result) && trim($result)) {
                    $return .= $result;
                }
            }
        }

        if (is_array($buttons) || (is_bool($buttons) && $buttons)) {
            $buttons = $this->_subject->getButtons($name, $buttons, $asset, $author);

            $return .= JLayoutHelper::render('joomla.editors.buttons', $buttons);
        }

        return $return;
    }


}
