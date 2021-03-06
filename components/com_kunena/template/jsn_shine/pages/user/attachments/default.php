<?php
/**
 * Kunena Component
 * @package Kunena.Template
 * @subpackage Pages.User
 *
 * @copyright (C) 2008 - 2016 Kunena Team. All rights reserved.
 * @license http://www.gnu.org/copyleft/gpl.html GNU/GPL
 * @link http://www.kunena.org
 **/
defined('_JEXEC') or die();

$content = $this->execute('User/Attachments');

$this->addBreadcrumb($content->headerText, 'index.php?option=com_kunena&view=user&layout=attachments');

echo $content;
