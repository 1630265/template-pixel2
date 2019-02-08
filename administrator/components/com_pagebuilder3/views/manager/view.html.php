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

//jimport('joomla.application.component.view');
/**
 * Manager view
 *
 * @package  JSN_PageBuilder3
 * @since    1.0.0
 */
class JSNPageBuilder3ViewManager extends JViewLegacy
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

		// Set the toolbar
		JToolbarHelper::title(JText::_('JSN_MENU_PAGE_MANAGER'));

		// Add toolbar menu
		JSNPageBuilder3Helper::addToolbarMenu();

		// Set the submenu
		JSNPageBuilder3Helper::addSubmenu('manager');

		// Add assets
		JSNPageBuilder3Helper::addAssets();


		JSNHtmlAsset::loadScript(JURI::root(true) . '/administrator/components/com_pagebuilder3/assets/manager/manager.js');

		JSNHtmlAsset::addStyle('//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.10/components/icon.min.css');
		JSNHtmlAsset::addStyle('//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

		// Display the template
		parent::display($tpl);
	}
}
