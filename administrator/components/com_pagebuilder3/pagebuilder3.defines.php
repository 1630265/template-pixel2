<?php
/**
 * 1.2.6    $Id$
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

define('JSN_PAGEBUILDER3_DEPENDENCY', '[{"type":"plugin","folder":"system","name":"jsnframework","identified_name":"ext_framework","client":"site","publish":"1","lock":"1","title":"JSN Extension Framework System Plugin"},{"type":"plugin","folder":"system","name":"pagebuilder3","dir":"plugins\/system\/pagebuilder3","client":"site","publish":"1","lock":"0","title":"JSN PageBuilder3 System Plugin"},{"type":"plugin","folder":"content","name":"pb3loadmodule","dir":"plugins\/content\/pb3loadmodule","client":"site","publish":"1","lock":"0","title":"JSN PageBuilder3 Load Module Plugin"},{"type":"plugin","folder":"editors","name":"pagebuilder3","dir":"plugins\/editors\/pagebuilder3","client":"site","publish":"1","lock":"0","title":"JSN PageBuilder3 Editor Plugin"}]');









// Define product identified name and version
define('JSN_PAGEBUILDER3_IDENTIFIED_NAME', 'ext_pagebuilder3');
define('JSN_PAGEBUILDER3_VERSION', '1.2.6');

// Define required Joomla version
define('JSN_PAGEBUILDER3_REQUIRED_JOOMLA_VER', '3.0');

// Only define below constant if product has multiple edition
define('JSN_PAGEBUILDER3_EDITION', 'developer');


// Define some necessary links
define('JSN_PAGEBUILDER3_INFO_LINK', 'https://www.joomlashine.com/joomla-extensions/jsn-pagebuilder.html');
define('JSN_PAGEBUILDER3_DOC_LINK', 'https://www.joomlashine.com/media/jsn_docs/pdf/jsn-pagebuilder-3-configuration-manual.pdf');
define('JSN_PAGEBUILDER3_UPDATE_LINK', 'index.php?option=com_pagebuilder3&view=update');
define('JSN_PAGEBUILDER3_GET_TOKEN_URL', 'https://www.joomlashine.com/index.php?option=com_lightcart&view=token&task=token.gettoken');


// If product has multiple edition, define upgrade link also
define('JSN_PAGEBUILDER3_UPGRADE_LINK', 'index.php?option=com_pagebuilder3&view=upgrade');
// If product is commercial, define buy link too
define('JSN_PAGEBUILDER3_BUY_LINK', 'https://www.joomlashine.com/joomla-extensions/jsn-pagebuilder.html');