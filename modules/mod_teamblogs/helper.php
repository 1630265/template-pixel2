<?php
/**
 * @package		EasyBlog
 * @copyright	Copyright (C) 2010 Stack Ideas Private Limited. All rights reserved.
 * @license		GNU/GPL, see LICENSE.php
 *
 * EasyBlog is free software. This version may have been modified pursuant
 * to the GNU General Public License, and as distributed it includes or
 * is derivative of works licensed under the GNU General Public License or
 * other free or open source software licenses.
 * See COPYRIGHT.php for copyright notices and details.
 */

// no direct access
defined('_JEXEC') or die('Restricted access');

class modEasyBlogTeamBlogsHelper
{
	function getData(&$params)
	{
		$mainframe	= JFactory::getApplication();
		$db         = JFactory::getDBO();
		$count		= $params->get( 'count' , 5 );
		$query		= 'SELECT a.* FROM ' . $db->nameQuote( '#__easyblog_team' ) . ' AS a '
					. 'WHERE a.' . $db->nameQuote( 'published' ) . '=' . $db->Quote( 1 );
					
		if( $count != 0 )
		{
			$query	.= ' LIMIT 0,' . $count;
		}
		
		$db->setQuery($query);

		$result		= $db->loadObjectList();

		if( !$result )
		{
			return false;
		}

		if( !class_exists( 'EasyBlogModelTeamBlogs' ) )
		{
			jimport( 'joomla.application.component.model' );
			JLoader::import( 'teamblogs' , EBLOG_ROOT . DS . 'models' );
		}

		$model	= JModel::getInstance( 'TeamBlogs' , 'EasyBlogModel' );
		$teams	= array();
		
		foreach( $result as $obj )
		{
			$team 	= EasyBlogHelper::getTable( 'TeamBlog' );
			$team->bind( $obj );

			$team->membersCount	= count( $model->getTeamMembers( $team->id ) );

			$teams[]	= $team;
		}

		return $teams;
	}

	function _getMenuItemId(&$params)
	{
		$itemId                 = '';
		$routeTypeCategory		= false;
		$routeTypeBlogger		= false;
		$routeTypeTag			= false;

		$routingType            = $params->get( 'routingtype', 'default' );

		if( $routingType != 'default' )
		{
			switch ($routingType)
			{
				case 'menuitem':
					$itemId					= $params->get( 'menuitemid' ) ? '&Itemid=' . $params->get( 'menuitemid' ) : '';
					break;
				default:
					break;
			}
		}

		return $itemId;
	}
}
