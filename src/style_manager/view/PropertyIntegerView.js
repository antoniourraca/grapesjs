define(['backbone','./PropertyView', 'Abstract/ui/InputNumber'],
	function (Backbone, PropertyView, InputNumber) {

	return PropertyView.extend({

		initialize: function(options) {
			PropertyView.prototype.initialize.apply(this, arguments);
			this.listenTo( this.model ,'change:unit', this.valueChanged);
		},

		/**
		 * Returns value from inputs
		 * @return {string}
		 */
		getValueForTarget: function(){
			return this.model.get('value') + this.model.get('unit');
		},

		renderInput: function() {
			if (!this.input) {
				var inputNumber = new InputNumber({
					model: this.model,
					ppfx: this.ppfx
				});
				this.input = inputNumber.render();
				this.$el.append(this.input.$el);
			}
			this.input.setValue(this.componentValue, {silent: 1});
		},

		renderTemplate: function(){},

		setValue: function() {},

	});
});
