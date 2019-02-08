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

jimport( 'joomla.filesystem.file' );

if(JFile::exists(JPATH_ROOT.DS.'components'.DS.'com_easyblog'.DS.'easyblog.php'))
{
	// Include the syndicate functions only once
	require_once (dirname(__FILE__).DS.'helper.php');
	require_once (JPATH_ROOT.DS.'components'.DS.'com_easyblog'.DS.'helpers'.DS.'router.php');
	require_once (JPATH_ROOT.DS.'components'.DS.'com_easyblog'.DS.'helpers'.DS.'helper.php');
	require_once (JPATH_ROOT.DS.'components'.DS.'com_easyblog'.DS.'helpers'.DS.'date.php');
    
    JTable::addIncludePath( EBLOG_TABLES );
	EasyBlogHelper::loadModuleCss();
    
    $document	= JFactory::getDocument();
	$document->addStyleSheet( rtrim(JURI::root(), '/') . '/components/com_easyblog/assets/css/module.css' );
    
	$document		= JFactory::getDocument();
	$teams			= modEasyBlogTeamBlogsHelper::getData( $params );
	$config 		= EasyBlogHelper::getConfig();

	require( JModuleHelper::getLayoutPath('mod_teamblogs') );	
}
