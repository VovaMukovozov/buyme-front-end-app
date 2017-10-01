import Ember from 'ember';

export default Ember.Controller.extend({
	api: Ember.inject.service(),
	class:{
		header:{
			show:false
		}
	},
  refresh: function(controller){
    controller.send('refreshModel');
  },
	actions: {
		showInput() {
			this.set('class.header.show', true);
		},
		createTodo(e) {
      let self = this;
			if (e.keyCode === 13 && !Ember.isBlank(e.target.value)) {
				this.get('api').add({ title: e.target.value.trim() }).then(function(){
          self.get('refresh')(self);
        });
				this.set('class.header.show', false);
				e.target.value = '';
			}
		},
    removeTodo(todo) {
      let self = this;
      this.get('api').delete(todo.id).then(function(){
        self.get('refresh')(self);
      });
    },
    updateTodo(todo) {
      let self = this;
      this.get('api').update(todo.id).then(function(){
        self.get('refresh')(self);
      });

    }
	}
});
