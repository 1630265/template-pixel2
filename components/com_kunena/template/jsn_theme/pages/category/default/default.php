<?php
/**
 * Kunena Component
 * @package     Kunena.JSNTemplate
 * @subpackage  Pages.Category
 *
 * @copyright   (C) 2008 - 2016 Kunena Team. All rights reserved.
 * @license     http://www.gnu.org/copyleft/gpl.html GNU/GPL
 * @link        https://www.kunena.org
 **/
defined('_JEXEC') or die;

$content = $this->execute('Category/Topics');

// Display breadcrumb path to the current category.
$parents = KunenaForumCategoryHelper::getParents($content->category->id);
$parents[] = $content->category;

// @var KunenaForumCategory $parent

foreach ($parents as $parent)
{
	$this->addBreadcrumb(
		$parent->displayField('name'),
		$parent->getUri()
	);
}

echo $this->subRequest('Category/Index');
echo $content;
