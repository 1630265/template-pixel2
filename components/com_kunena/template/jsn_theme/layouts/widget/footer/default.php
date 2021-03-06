<?php
/**
 * Kunena Component
 * @package     Kunena.JSNTemplate
 * @subpackage  Layout.Widget
 *
 * @copyright   (C) 2008 - 2016 Kunena Team. All rights reserved.
 * @license     http://www.gnu.org/copyleft/gpl.html GNU/GPL
 * @link        https://www.kunena.org
 **/
defined('_JEXEC') or die;
?>

<?php if (($rss = $this->getRSS()) !== null) : ?>
<div class="pull-right large-kicon"><?php echo $this->getRSS(); ?></div>
<div class="clearfix"></div>
<?php endif; ?>

<?php if (($time = $this->getTime()) !== null) : ?>
<div class="center">
	<?php echo JText::sprintf('COM_KUNENA_VIEW_COMMON_FOOTER_TIME', $time); ?>
</div>
<?php endif;
