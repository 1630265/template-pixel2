void function ( exports, $, _, Backbone ) {
	exports.ES_GridsView = B.View.extend({
		constructor: function ES_GridsView ( options ) {
			B.View.apply(this, arguments);
		},
		modelEvents: {
			'change': 'render'
		},
		initialize: function () {
			this.$el.append('<svg>');
		},
		render: function () {

			this.$svg = this.$('svg');
			if ( !this.model.get('show') )
				return this.$svg.html('');

			var width = this.$el.width();
			var height = this.$el.height();
			var origin = this.superView.model.get('layout.origin');

			var offsetX = 0;
			var offsetY = 0;

			var color = this.model.get('color');
			var columnWidth = parseInt(this.model.get('size'));
			var gutterWidth = columnWidth / parseInt(this.model.get('gutter'));
			var gutterX, gutterY;
			this.$svg.css({ width: width, height: height });

			var ctx = $('<div>');

			// Go in both direction forward and reverse
			_([ false, true ]).each(function ( reverse ) {
				// Set x at the slider offset value
				var x = offsetX;
				// Draw draw line by line until it the end of the element
				while ( x >= (0 - columnWidth) && x <= (width + columnWidth) ) {

					(reverse && x == offsetX ) || x >= 0 && x <= width &&
					$('<text class="grid-number grid-number-top">')
						.text(reverse ? -(offsetX - x) : x - offsetX)
						.attr({ y: -10, x: x === 0 ? 0 : x, fill: color })
						.appendTo(ctx);

					x >= 0 && x <= width &&
					$('<line class="grid-line grid-line-horizontal">').appendTo(ctx)
						.attr({ x1: x, x2: x, y1: -5, y2: height })
						.css({ stroke: color, opacity: x == 1 });

					gutterX = Math.round(x + gutterWidth) + 0.5;

					while ( gutterX < x + columnWidth && gutterX <= (reverse ? offsetX : width) ) {
						gutterX >= 0 &&
						$('<line class="gutter-line gutter-line-horizontal">').appendTo(ctx)
							.attr({ x1: gutterX, x2: gutterX, y1: -5, y2: height })
							.css({ stroke: color, strokeWidth: 1, strokeDasharray: '', opacity: 0.5 });
						gutterX += gutterWidth;
					}

					reverse ? (x -= columnWidth) : (x += columnWidth);
				}
			});

			_([ false, true ]).each(function ( reverse ) {
				var y = offsetY;
				while ( y >= (0 - columnWidth) && y <= (height + columnWidth) ) {

					(reverse && y == offsetY ) || y > 0 && y <= height &&
					$('<text class="grid-number grid-number-left">')
						.text(reverse ? -(offsetY - y) : y - offsetY)
						.attr({ x: -10, y: y, fill: color })
						.appendTo(ctx);

					y >= 0 && y <= height &&
					$('<line class="grid-line grid-line-vertical">').appendTo(ctx)
						.attr({ x1: -5, y1: y, x2: width, y2: y })
						.css({ stroke: color, opacity: y == 1 });

					gutterY = Math.round(y + gutterWidth) + 0.5;

					while ( gutterY < y + columnWidth && gutterY <= (reverse ? offsetY : height) ) {
						gutterY >= 0 &&
						$('<line class="gutter-line gutter-line-vertical">').appendTo(ctx)
							.attr({ x1: -5, x2: width, y1: gutterY, y2: gutterY })
							.css({ stroke: color, opacity: 0.5 });
						gutterY += gutterWidth;
					}

					reverse ? (y -= columnWidth) : (y += columnWidth);
				}

			});
			this.$svg.html(ctx.html())
		}
	});

}(this, jQuery, _, JSNES_Backbone);