<?php
/**
 * @version    $Id$
 * @package    JSN_EasySlider
 * @author     JoomlaShine Team <support@joomlashine.com>
 * @copyright  Copyright (C) 2012 JoomlaShine.com. All Rights Reserved.
 * @license    GNU/GPL v2 or later http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Websites: http://www.joomlashine.com
 * Technical Support:  Feedback - http://www.joomlashine.com/contact-us/get-support.html
 */
// No direct access to this file
defined('_JEXEC') or die('Restricted access');
?>
<div class="panel panel-default es-panel es-editor-panel" id="custom-css-editor">
	<div class="panel-heading">
		<h3 class="panel-title"><?php echo JText::_('JSN_EASYSLIDER_SLIDER_CSS_EDITOR');?></h3>
	</div>
	<div class="panel-body">
		<div class="es-editor es-code-mirror-editor"></div>
		<input type="hidden" class="editor-input" data-bind="custom_css">
	</div>
	<div class="panel-footer text-right">
		<a class="btn btn-default btn-xs close-editor-btn pull-left"><?php echo JText::_('JSN_EASYSLIDER_CANCEL');?></a>
		<a class="btn btn-success btn-xs save-editor-btn"><?php echo JText::_('JSN_EASYSLIDER_SAVE_CHANGES');?></a>
	</div>
</div>

<div class="panel panel-default es-panel es-editor-panel" id="custom-js-editor">
	<div class="panel-heading">
		<h3 class="panel-title"><?php echo JText::_('JSN_EASYSLIDER_SLIDER_JAVASCRIPT_EDITOR');?></h3>
	</div>
	<div class="panel-body">
		<div class="es-editor es-code-mirror-editor"></div>
		<input type="hidden" class="editor-input" data-bind="custom_js">
	</div>
	<div class="panel-footer text-right">
		<a class="btn btn-default btn-xs close-editor-btn pull-left"><?php echo JText::_('JSN_EASYSLIDER_CANCEL');?></a>
		<a class="btn btn-success btn-xs save-editor-btn"><?php echo JText::_('JSN_EASYSLIDER_SAVE_CHANGES');?></a>
	</div>
</div>