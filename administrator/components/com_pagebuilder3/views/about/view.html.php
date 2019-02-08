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
 * About view
 *
 * @package  JSN_PageBuilder3
 * @since    1.0.0
 */
class JSNPageBuilder3ViewAbout extends JSNBaseView
{
	/**
	 * Display method
	 *
	 * @param   string  $tpl  The name of the template file to parse; automatically searches through the template paths.
	 *
	 * @return	void
	 */
	function display($tpl = null)
	{
		// Get config parameters
		$config = JSNConfigHelper::get();

		// Set the toolbar
		JToolbarHelper::title(JText::_('JSN_PAGEBUILDER3_ABOUT_TITLE'));

		// Add toolbar menu
		JSNPageBuilder3Helper::addToolbarMenu();

		// Set the submenu
		JSNPageBuilder3Helper::addSubmenu('about');

		// Get messages
//		$msgs = '';
//
//		if ( ! $config->get('disable_all_messages'))
//		{
//			$msgs = JSNUtilsMessage::getList('ABOUT');
//			$msgs = count($msgs) ? JSNUtilsMessage::showMessages($msgs) : '';
//		}
//
//		// Assign variables for rendering
//		$this->assignRef('msgs', $msgs);

		// Add assets
		JSNPageBuilder3Helper::addAssets();

		// Display the template
		parent::display($tpl);
	}
}
