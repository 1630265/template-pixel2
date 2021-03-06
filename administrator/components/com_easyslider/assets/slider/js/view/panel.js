void function ( exports, $, _, Backbone ) {

	var zIndexCounter = 0;
	var panels = [];

	$(window).on('resize scroll', function () {
		_(panels).each(function ( panel ) {
			if ( panel._openned ) {
				panel.$el.show();
				panel.open({ direction: panel.options.direction })
			}
		})
	})

	exports.ES_PanelView = B.View.extend({
		constructor: function ES_PanelView () {
			_.bindAll(this, 'open', 'close')
			this.$bg = $('<div class="panel-background">');
			this.options = _.defaults({}, this.options, this.defaults);
			this._openned = false;
			panels.push(this);
			B.View.apply(this, arguments);
			this.close();
			this.$el.on('click','.nav a', _.debounce(_.bind(function() {
				this.open();
			},this)))
			this.$el.on('click', _.bind(function(e) {
				if ( this.rootView && this.rootView.colorPicker && this != this.rootView.colorPicker) {
					this.rootView.colorPicker.close()
				}
			},this))
		},

		defaults: {
			direction: 'top',
			background: false,
			activeTarget: false,
			sticky: false,
		},

		close: function () {
			this.$el.hide();
			this.$bg.hide();
			$(this.target).removeClass('active')
			this._openned = false;
			this.trigger('close');
		},
		open: function ( options ) {
			//this.trigger('before:open');
			if ( this.target && this.options.activeTarget )
				$(this.target).removeClass('active');

			var options = this.options = _.extend({}, this.options, options);
			var openned = this._openned;

			var direction = options.direction;
			var activeTarget = options.activeTarget;
			var background = options.background;
			var sticky = options.sticky;

			var target = this.target = options.target || this.target;

			this.trigger('before:open');

			if ( !openned ) {
				if ( background )
					this.$bg.css('z-index', zIndexCounter++).show().one('mousedown', _.bind(function(e) {
						e.stopPropagation();
						this.close();
					}, this));
				else if ( !sticky )
					this.$el.clickOutside(this.close)

				this.$el.css('z-index', zIndexCounter++)
					.show()
					.before(this.$bg)
			}

			if ( target ) {

				if ( activeTarget )
					$(target).addClass('active');

				var myPosition = direction == 'left' ? 'right-2' :
					direction == 'right' ? 'left+2' :
						direction == 'top' ? 'bottom-8' :
							direction == 'bottom' ? 'top+8' : 'center';
				switch ( direction ) {
					case 'top':
					case 'bottom':
						var flow = 'vertical';
						var collision = 'fit flip';
						break;
					case 'left':
					case 'right':
						var flow = 'horizontal';
						var collision = 'flip fit';
						break;
					default:
						var flow = 'fit';
						var collision = 'fit fit';
						break;
				}
				var position = {
					my: myPosition,
					at: direction,
					of: target,
					collision: collision,
					//within: (direction == 'top' || direction == 'bottom') ?$('.es-canvas-wrapper').parent() : '.es-canvas-wrapper',
					using: function ( pos, ui ) {

						var oldPos = ui.element.element.position();

						var $arrow = ui.element.element.children('.es-panel-arrow');
						$arrow.length || ($arrow = $('<div class="es-panel-arrow">').appendTo(ui.element.element))
						$arrow.removeClass('top left right bottom').hide();

						ui.element.element.css(pos);

						if (ui.element.element.height() > window.innerHeight) {
							ui.element.element.height('auto');
							//ui.element.element.height(window.innerHeight);
							ui.element.element.css('top', '0px');
							ui.element.element.css('bottom', '0px');
						}

						if ( flow == 'fit' )
							return;

						$arrow.show().position({
							my: 'center',
							at: 'center',
							of: ui.target.element
						});

						switch ( flow ) {
							case 'vertical':
								var arrowClassName = ui.vertical;
								break;
							case 'horizontal':
								var arrowClassName = ui.horizontal;
								break;
						}
						$arrow.addClass(arrowClassName);

						if ( options.animate && openned )
							ui.element.element.css(oldPos).animate(pos, 'fast');
					}
				};
				if ( this.within ) {
					position.within = this.within;
				}
				this.$el.position(position);
			}

			this._openned = true;
			this.trigger('open');
			this.trigger('after:open');
			return this
		},
	});

	exports.ES_InspectorView = ES_PanelView.extend({
		constructor: function ES_InspectorView () {
			ES_PanelView.apply(this, arguments);
		},
		inspect: function ( models ) {
			this.setBindingModel(models);
			this.models = models;
            this.trigger('inspect')
			return this;
		},
		setAll: function( key, value ) {
			_(this.__dataBinding.models).invoke('set', key, value)
		}
	});

	exports.ES_ItemInspector = ES_InspectorView.extend({
		options: {
			direction: 'bottom',
		},
		bindings: [
			{
				selector: '.inspector-border-group',
				type: 'disabled',
				attr: 'style.border.borderStyleNotNone'
			}
		],
		events: {
			'mousedown': function ( e ) {
				this.rootView.animationInspector.close()
				this.rootView.boxShadowInspector.close()
				this.rootView.textShadowInspector.close()

                if ( this.rootView.fontsPicker._openned ) {
                    if ( this.fontName ) {
                        this.rootView.fontsPicker.trigger('select', this.fontName)
                    }
                    this.rootView.fontsPicker.close()
                }
			},
            'mousedown .fonts-select-btn .font-name': function ( e ) {
                e.stopPropagation();
                if(! this.rootView.fontsPicker._openned ) {
                    this.fontName = this.$('.fonts-select-btn .font-name').val();
                    this.$('.fonts-select-btn .font-name').val('');
                    this.rootView.fontsPicker.regex = '';
                }

            },
			'mousedown .effect-select': function ( e ) {
				e.stopPropagation();
			},
			'click .edit-animation-in-btn': function ( e ) {
				var selected = _(this.rootView.activeItems.where({ selected: true })).map(function ( model ) {
					return model.get('animation.in');
				})
				this.rootView.animationInspector
					.open({ target: e.currentTarget, direction: 'right' })
					.inspect(selected);
			},
			'click .edit-animation-out-btn': function ( e ) {
				var selected = _(this.rootView.activeItems.where({ selected: true })).map(function ( model ) {
					return model.get('animation.out');
				})
				this.rootView.animationInspector
					.open({ target: e.currentTarget, direction: 'right' })
					.inspect(selected);
			},
			'click .fonts-select-btn': function ( e ) {
				!this.rootView.fontsPicker._openned && this.rootView.fontsPicker
					.open({ target: e.currentTarget, direction: 'right', background: false })
					.once('select', function ( font ) {
						this.$('.fonts-select-btn .font-name').val(font).trigger('change')
					}, this);
			},

			'click .select-item-image-btn': function(e) {
				$.ES_MediaSelector(_.bind(function ( src ) {
					this.setAll('style.background.image.src', src)
				}, this))
			},

			'click .show-box-shadow-settings': function ( e ) {
				var selected = _(this.rootView.activeItems.where({ selected: true })).map(function ( model ) {
					return model.get('style');
				})
                if ( selected ) {
                    _.each( selected, function( model ) {
                        if ( model.get('box_shadows').length == 0 ) {
                            model.get('box_shadows').add({});
                        }
                    })
                }
				this.rootView.boxShadowInspector
						.open({ target: e.currentTarget, direction: 'right' })
						.inspect(selected);
                this.setShadow('box')
			},
			'click .show-text-shadow-settings': function ( e ) {
				var selected = _(this.rootView.activeItems.where({ selected: true })).map(function ( model ) {
					return model.get('style');
				})
				if ( selected ) {
                    _.each( selected, function( model ) {
                        if ( model.get('text_shadows').length == 0 ) {
                            model.get('text_shadows').add({});
                        }
                    })
                }
				this.rootView.textShadowInspector
						.open({ target: e.currentTarget, direction: 'right' })
						.inspect(selected);
                this.setShadow('text')
			},
            'keyup .fonts-select-btn .font-name': function(e){
                if ( e.keyCode == 13 ) {
                    e.preventDefault();
                }
                var value = this.$('.fonts-select-btn .font-name').val();
                this.rootView.fontsPicker.regex = value;
                this.$('.fonts-select-btn').trigger('click')
                this.rootView.fontsPicker.open();
            }
		},
		initialize: function () {

			var $effect = this.$('.effect-select')
			_(ES_ANIMATIONS).each(function ( animations, group ) {
				var $group = $('<optgroup>').attr('label', group).appendTo($effect);
				_(animations).each(function ( animation, name ) {
					$('<option>').attr('value', name).text(name).appendTo($group)
				}, this)
			}, this);
			this.on('open', _.debounce(this.toggleVisibility))
            //this.on('inspect', this.setShadow)
		},
		ready: function () {
			this.$tabs = this.$('.item-inspector-tabs > li > a').parent();
			this.$commonTabs = this.$('.item-inspector-tabs > li > a[data-type-common]').parent();
			this.$textTabs = this.$('.item-inspector-tabs > li > a[data-type-text]').parent();
			this.$imageTabs = this.$('.item-inspector-tabs > li > a[data-type-image]').parent();
			this.$videoTabs = this.$('.item-inspector-tabs > li > a[data-type-video]').parent();
			this.$boxTabs = this.$('.item-inspector-tabs > li > a[data-type-box]').parent();
            _(['change','add','remove']).each(_.bind(function(event) {
                this.listenTo(this.rootView.boxShadowInspector.shadowsView.collection, event, function(model){

                    var collection = model.collection;
                    _(this.__dataBinding.models).each(function(model){
                        model.get('style.box_shadows').reset([], {silent: true}).set(collection.toJSON());
                    })
                })
            }, this));

            _(['change','add','remove']).each(_.bind(function(event) {
                this.listenTo(this.rootView.textShadowInspector.shadowsView.collection, event, function(model){

                    var collection = model.collection;
                    _(this.__dataBinding.models).each(function(model){
                        model.get('style.text_shadows').reset([], {silent: true}).set(collection.toJSON());
                    })
                })
            }, this))
		},
		getSelectedTypes: function() {
			return _(this.models)
				.chain()
				.map(function(m) { return m.get('type') })
				.uniq()
				.value()
		},
		toggleVisibility: function() {
			this.$tabs.addClass('hidden');
			this.$commonTabs.removeClass('hidden');
			var selectedTypes = this.getSelectedTypes();
			if (selectedTypes.length != 1)
				return this;
			switch (selectedTypes[0]) {
				case 'text':
					!this.$textTabs.add(this.$commonTabs).hasClass('active') && this.showTab('text');
					this.$textTabs.removeClass('hidden'); break;
				case 'image':
					!this.$imageTabs.add(this.$commonTabs).hasClass('active') && this.showTab('image');
					this.$imageTabs.removeClass('hidden'); break;
				case 'video':
					!this.$videoTabs.add(this.$commonTabs).hasClass('active') && this.showTab('video');
					this.$videoTabs.removeClass('hidden'); break;
				case 'box':
					!this.$boxTabs.add(this.$commonTabs).hasClass('active') && this.showTab('style');
					this.$boxTabs.removeClass('hidden'); break;
			}
		},
		showTab: function(name, focusInput) {
			this.$('[aria-controls="item-inspector-'+name+'"]').tab('show');
			focusInput && this.$('#item-inspector-'+name+' input').eq(0).focus();
		},
        setShadow: function(type) {
            if( this.__dataBinding.models.length > 1 ) {
                this.rootView.boxShadowInspector.$('em').show()
                this.rootView.textShadowInspector.$('em').show()
            }
            else {
                this.rootView.boxShadowInspector.$('em').hide()
                this.rootView.textShadowInspector.$('em').hide()
            }
            if (type == 'box') {
                var shadow = this.__dataBinding.models[0].get('style.box_shadows');
                this.rootView.boxShadowInspector.shadowsView.collection.reset(shadow.toJSON());
            }
            else if (type == 'text') {
                var shadow = this.__dataBinding.models[0].get('style.text_shadows');
                this.rootView.textShadowInspector.shadowsView.collection.reset(shadow.toJSON());
            }

        }
	})

	exports.ES_SettingsPanel = ES_InspectorView.extend({
		options: {
			background: true
		},
		events: {

		},
		initialize: function () {
			this.on('open', function() {
				this.$el.position({ my: 'center', at: 'center', of: this.rootView.el })
			})
		}
	});

	exports.ES_QuickSettingsPanel = ES_InspectorView.extend({
		options: {

		},
		events: {
			'click .slider-type-option-standard': function() {
				this.model.set('layout.type', 1);
			},
			'click .slider-type-option-carousel': function() {
				this.model.set('layout.type', 2);
			},
			'click .slider-layout-option-1': function() {
				console.log('auto width', this.model.get('layout.preset'))
				this.model.set('layout.preset', 'auto-width');
			},
			'click .slider-layout-option-2': function() {
				console.log('full width', this.model.get('layout.preset'))
				this.model.set('layout.preset', 'full-width');
			},
			'click .slider-layout-option-3': function() {
				this.model.set('layout.preset', 'full-screen');
			}
		},
		bindings: [
			{
				selector: '.repeat-slider',
				type: 'enabled',
				attr: 'autoSlide.enable'
			},
			{
				selector: '.slider-type-option-standard',
				type: 'class',
				attr: { active: 'layout.type' },
				parse: function( value ) {
					return parseInt(value) == 1 ? true : false;
				}
			},
			{
				selector: '.slider-type-option-carousel',
				type: 'class',
				attr: { active: 'layout.type' },
				parse: function( value ) {
					return parseInt(value) == 2 ? true : false;
				}
			},
			{
				selector: '.slider-layout-option-1',
				type: 'class', attr: { active: 'layout.preset' },
				parse: function( value ) {
					return value === 'auto-width' ? true : false;
				}
			},
			{
				selector: '.slider-layout-option-2',
				type: 'class', attr: { active: 'layout.preset' },
				parse: function( value ) {
					return value === 'full-width' ? true : false;
				}
			},
			{
				selector: '.slider-layout-option-3',
				type: 'class', attr: { active: 'layout.preset' },
				parse: function( value ) {
					return value === 'full-screen' ? true : false;
				}
			},
		],
		initialize: function () {
			console.log('quick view ')
		}
	});

	exports.ES_AnimationInspector = ES_InspectorView.extend({
		options: {
			activeTarget: true
		},
		events: {
			'click .edit-transform-btn,.back-to-edit-basic-btn': function () {
				this.$('.basic-edit-panel,.transform-edit-panel').toggleClass('hidden');
				this.open()
			}
		},
		initialize: function () {
			var $effect = this.$('.effect-select')
			_(ES_ANIMATIONS).each(function ( animations, group ) {
				var $group = $('<optgroup>').attr('label', group).appendTo($effect);
				_(animations).each(function ( animation, name ) {
					$('<option>').attr('value', name).text(name).appendTo($group)
				}, this)
			}, this)
		}
	})

	exports.ES_CustomCSSEditor = ES_PanelView.extend({
		options: {
			background: false,
			sticky: true,
		},
		events: {
			'mousedown': function() {
				if (this.$el.is('.es-panel-focus'))
					return;
				this.rootView.$('.es-panel-focus').removeClass('es-panel-focus');
				this.$el.addClass('es-panel-focus');
			},
			'click .save-editor-btn': function () {
				this.$input.trigger('change')
				this.close()
			},
			'click .close-editor-btn': function () {
				this.$input.val(this.model.get('custom_js'));
				this.close()
			}
		},
		initialize: function () {
			var self = this;

			self.$el.draggable({
				handle: '.panel-heading'
			})

			self.$input = this.$('input.editor-input')
			self.once('open', function () {
				self.editor = CodeMirror(self.$('.es-editor').get(0), {
					mode: 'css',
					value: self.$input.val(),
					lineNumbers: true,
					autoCloseBrackets: true,
				})
				self.editor.on('change', function () {
					self.$input.val(self.editor.getValue())
				})
				self.editor.setSize(600, 350);
				self.editor.refresh();
				self.$el
					.position({
						my: 'center',
						at: 'center',
						of: 'body'
					})
					.trigger('mousedown')
			})
		}
	})

	exports.ES_CustomJSEditor = ES_PanelView.extend({
		options: {
			background: false,
			sticky: true,
		},
		events: {
			'mousedown': function() {
				if (this.$el.is('.es-panel-focus'))
					return;
				this.rootView.$('.es-panel-focus').removeClass('es-panel-focus');
				this.$el.addClass('es-panel-focus');
			},
			'click .save-editor-btn': function () {
				this.$input.trigger('change')
				this.close()
			},
			'click .close-editor-btn': function () {
				this.$input.val(this.model.get('custom_js'));
				this.close()
			}
		},
		initialize: function () {
			var self = this;

			self.$el.draggable({
				handle: '.panel-heading'
			})

			self.$input = this.$('input.editor-input')

			self.once('open', function () {
				self.editor = CodeMirror(self.$('.es-editor').get(0), {
					mode: 'javascript',
					value: self.$input.val(),
					lineNumbers: true,
					autoCloseBrackets: true,
					extraKeys: {
						//Enter: "autocomplete"
					},
					mode: { name: "javascript", globalVars: true }
				})
				self.editor.on('change', function () {
					self.$input.val(self.editor.getValue())
				})
				self.editor.setSize(600, 350);
				self.editor.refresh();
				self.$el
					.position({
						my: 'center',
						at: 'center',
						of: 'body'
					})
					.trigger('mousedown')
			})
			u = self;
		}
	})

	exports.ES_Tooltip = ES_PanelView.extend({
		options: {
			background: false,
			sticky: false,
		},
		events: {

		},
		initialize: function () {
			this.on('before:open', function(){
				if (!this.options.target)
					return;

				var $target = $(this.options.target);
				var title = $target.data('title');

				if( typeof title === 'undefined' ) {
					title = $target.attr('title');
					$target.removeAttr('title');
				}
				$target.data('title', title);
				this.$('.content').text(title || '');
			})
		},

	})

	exports.quickTourView = ES_PanelView.extend({
		events: {

		},
		initialize: function () {
			var view = this;
			this.on('before:open', function(){
				this.options = this.options || {};
				if (!this.options.target){
					this.options.target = $( this.$el.attr('data-target') ).get(0);
				}

				this.options.direction = this.$el.attr('data-direction');

			})
			this.on('after:open', function(){
				if( !$($( this.$el.attr('data-target') ).get(0)).is(':visible') ) {
					view.close()
				}
			})
		},
		ready: function(){
			//this.open();
		}
	})

	exports.ES_QuickTours = B.View.extend({

		events: {
			'click': 'close'
		},
		initialize: function(){
			var view = this;

			this.$('.quick-tour-panel').each(function(i, el){
				var newView = view.appendView(new quickTourView({el: el}));
			})
		},
		ready: function(){
			//this.open();
		},
		open: function(){
			var view = this;
			this.$el.show();
			_(view.subViews).invoke('open');
			$(window).trigger('resize')
		},
		close: function(){
			this.$el.hide()
		}
	});

	exports.ES_BoxShadowInspector = ES_InspectorView.extend({
		options: {
			activeTarget: true,
		},
		views: {
			'shadowsView > #box-shadows': B.CollectionView.extend({
				itemView: B.View.extend({
					events: {
						'click .remove-box-shadow-btn': function(){
							this.model.collection.remove(this.model);
							this.remove();
						}
					}
				})
			})
		},
		events: {
			'click .add-box-shadow-btn': function(){
				this.shadowsView.collection.add({});
			}
		},
		ready: function () {
			this.shadowsView.setCollection( new ES_Item_Style.prototype.relations.box_shadows);
			aaa = this;
		}
	})
	exports.ES_TextShadowInspector = ES_InspectorView.extend({
		options: {
			activeTarget: true,
		},
		views: {
			'shadowsView > #text-shadows': B.CollectionView.extend({
				itemView: B.View.extend({
					events: {
						'click .remove-text-shadow-btn': function(){
							this.model.collection.remove(this.model);
							this.remove();
						}
					}
				})
			})
		},
		events: {
			'click .add-text-shadow-btn': function(){
				this.shadowsView.collection.add({});
			}
		},
		ready: function () {
			this.shadowsView.setCollection( new ES_Item_Style.prototype.relations.box_shadows);
			aaa = this;
		}
	})


}(this, jQuery, _, JSNES_Backbone);