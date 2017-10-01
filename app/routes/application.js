import Ember from 'ember';

export default Ember.Route.extend({
	api: Ember.inject.service(),
  actions: {
     refreshModel: function() {
        this.refresh();
     }
  },
	model() {
		return this.get('api').featchAll();
	}
});
