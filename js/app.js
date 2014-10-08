(function () {
	var footPub = {
		Model: {},
		Collection: {},
		View: {}
	};

	footPub.Model.Button = Backbone.Model.extend({
		defaults: {
			name: '',
			soundFile: ''
		}
	});
	
	footPub.Collection.Buttons = Backbone.Collection.extend({
		model: footPub.Model.Button,
		fetch: function () {
			this.add({
				name: 'Buuuuu',
				soundFile: 'audio/bu.ogg'
			});
			
			this.add({
				name: 'Goooooooaaaaal!!!',
				soundFile: 'audio/goal.ogg'
			});
			
			this.add({
				name: 'Oeee-oe-oe-oeee',
				soundFile: 'audio/oe.ogg'
			});
			
			this.add({
				name: 'Uuuyyyyyy!!',
				soundFile: 'audio/uy.ogg'
			});
			
			this.add({
				name: 'WOOoooooo...',
				soundFile: 'audio/wo.ogg'
			});
			
			this.add({
				name: 'Wuuuuuuu!!',
				soundFile: 'audio/wu.ogg',
			});
		}
	});

	footPub.View.Button = Backbone.View.extend({
		tagName: 'button',
		className: 'recommend',
		events: {
			'click': 'playSound'
		},
		playSound: function () {
			var audio = new Audio(this.model.get('soundFile'));
			audio.play();
		},
		render: function () {
			this.$el.text(this.model.get('name'));
		
			return this;
		}
	});
	
	footPub.View.Buttons = Backbone.View.extend({
		el: '#button-list',
		render: function () {
			this.$el.empty();
			
			this.collection.each(this.addButton, this);
		},
		addButton: function (buttonModel) {
			var buttonView = new footPub.View.Button({
				model: buttonModel
			});
		
			this.$el.append(buttonView.render().$el);
			
			return this;
		}
	});

	$(document).on('ready', function () {
		var buttonCollection = new footPub.Collection.Buttons();
		buttonCollection.fetch();
		
		var buttonListView = new footPub.View.Buttons({
			collection: buttonCollection
		});
		buttonListView.render();
	});
})();
