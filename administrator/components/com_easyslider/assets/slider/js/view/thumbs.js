void function ( exports, $, _, Backbone ) {

	var ES_ThumbView = exports.ES_ThumbView = B.View.extend({
		constructor: function ES_ThumbView () {
			B.View.apply(this, arguments);
		},
		events: {
			mousedown: function ( e ) {
				$('input:focus').blur();
				this.model.set('active', true);
				this.$el.addClass('selected')
				this.rootView.deactivateGlobalItems();
				this.defer(function () {
					this.showOptions(e)
				})
			},
			options: function ( e ) {
				this.showOptions(e);
			}
		},
		modelEvents: {
			'remove': 'remove',
		},
		bindings: [
			{
				type: 'class',
				attr: {
					'selected': 'active'
				}
			},
			{
				selector: '.thumb-preview',
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

		updateIndex: function () {
			this.model.set('index', this.$el.index());
		},
		showOptions: function ( e ) {
			this.rootView.thumbMenu.inspect(this.model);
			this.rootView.thumbMenu.open({
				direction: 'right',
				target: this.el
			})
		}
	});

	var ES_ThumbsView = exports.ES_ThumbsView = B.CollectionView.extend({
		constructor: function ES_ThumbsView () {
			this.debounceUpdateIndex = _.debounce(this.updateIndex);
			B.CollectionView.apply(this, arguments);
		},
		itemView: ES_ThumbView,
		events: {
			'mousedown': function(e) {
				e.stopPropagation();
				e.preventDefault();
				this.hideOtherMenu()
			},
			'mousewheel': function(e) {
				if (this.rootView.thumbMenu._openned)
					this.rootView.thumbMenu.open();
			},
			'sort': 'showSlideMenu',
			'sortstart': 'hideOtherMenu',
			'sortstop': 'showSlideMenu',
			'sortupdate': function () {
				this.updateIndex()
				this.$('.selected').trigger('options')
			}
		},
		ready: function () {
			this.listenTo(this.collection, 'add', this.debounceUpdateIndex)
			this.listenTo(this.collection, 'remove', this.debounceUpdateIndex)
			this.listenTo(this.collection, 'reset', this.debounceUpdateIndex)

			this.$el.sortable({
				distance: 10,
				placeholder: 'es-thumb placeholder',
			});
		},
		updateIndex: function () {
			_(this.subViews).invoke('updateIndex');
		},
		showSlideMenu: function() {
			this.rootView.thumbMenu.open();
		},
		hideOtherMenu: function() {
			this.defer(function () {
				this.rootView.colorPicker.close();
				this.rootView.itemInspector.close();
			})
		}
	});

}(this, jQuery, _, JSNES_Backbone);