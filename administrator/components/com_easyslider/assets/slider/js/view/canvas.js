void function ( exports, $, _, Backbone ) {

	exports.ES_CanvasView = B.View.extend({
		constructor: function ES_CanvasView () {
			this.scrollTopPercent = 0.5;
			this.scrollLeftPercent = 0.5;
			B.View.apply(this, arguments);
		},
		events: {
			'selectablestart .es-canvas-layout': 'selectable_start',
			'selectableselected .es-canvas-layout': 'selectable_selected',
			'selectableunselected .es-canvas-layout': 'selectable_unselected',
			'scroll': function( e ) {
				var maxScrollTop = this.el.scrollHeight - this.el.clientHeight;
				var maxScrollLeft = this.el.scrollWidth - this.el.clientWidth;

				if ( !maxScrollTop )
					this.scrollTopPercent = 0.5;
				else
					this.scrollTopPercent = this.el.scrollTop / maxScrollTop;

				if ( !maxScrollLeft )
					this.scrollLeftPercent = 0.5
				else
					this.scrollLeftPercent = this.el.scrollLeft / maxScrollLeft;

				this.rootView.resizeSlider()
			}
		},
		modelEvents: {},
		bindings: [
			{
				selector: '.es-canvas .es-canvas-slide-bg',
				type: 'style',
				attr: {
					'backgroundColor': 'background.color',
					'backgroundImage': 'background.image.src',
					'backgroundPosition': 'background.position',
					'backgroundSize': 'background.size',
				},
				parse: function ( value, key ) {
					switch ( key ) {
						case 'backgroundImage':
							return value ? 'url(' + ES_App.getImageURL(value) + ')' : '';
						default:
							return value;
					}
				}
			}
		],
		ready: function () {
			this.$('.es-canvas-layout').selectable({
				filter: '.es-selection:not(.locked):not(.hidden) .selection-offset'
			});
		},
		resize: function () {
			var maxScrollTop = this.el.scrollHeight - this.el.clientHeight;
			var maxScrollLeft = this.el.scrollWidth - this.el.clientWidth;
			!maxScrollTop && (this.scrollTopPercent = 0.5);
			!maxScrollLeft && (this.scrollLeftPercent = 0.5);
			this.el.scrollTop = this.scrollTopPercent * maxScrollTop;
			this.el.scrollLeft = this.scrollLeftPercent * maxScrollLeft;
		},
		selectable_start: function ( e ) {
			$(':focus').blur();
			$('body').trigger($.Event('mousedown', e));
		},
		selectable_selected: function ( e, ui ) {
			$(ui.selected).trigger('select');
		},
		selectable_unselected: function ( e, ui ) {
			$(ui.unselected).trigger('deselect');
		},
	});

}(this, jQuery, _, JSNES_Backbone);