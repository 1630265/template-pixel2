

/* FILE: /components/com_uniform/assets/js/jsn_uf_conflict.js */
if (typeof jQuery.noConflict() == 'function') {	
	var jsnUF = jQuery.noConflict();
}
try {
	if (JSNUFjQueryBefore && JSNUFjQueryBefore.fn.jquery) {
		jQuery = JSNUFjQueryBefore;
	}
} catch (e) {
	console.log(e);
};
