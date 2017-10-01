import Ember from 'ember';
import config from './../config/environment';

export default Ember.Service.extend({
	lastId: 0,
	data: null,
	featchAll() {
    let self = this;
    return Ember.$.ajax({
      url: config.api.baseUrl + '/todo',
      type: "GET",
    }).then(function(resp){
      self.set('data', resp.data)
      return resp.data;
    }).catch(function(error){
      console.log(error);
    });
	},

	add(attrs) {
    let self = this;
    return Ember.$.ajax({
      url: config.api.baseUrl + '/todo',
      type: "POST",
      dataType: 'JSON',
      data: attrs
    }).then(function(resp){
      return self.featchAll();
    }).catch(function(error){
      console.log(error);
    });
	},
  update(id) {
    let self = this;
    return Ember.$.ajax({
      url: config.api.baseUrl + '/todo/'+id,
      type: "PUT",
      dataType: 'JSON'
    }).then(function(resp){
      return self.featchAll();
    }).catch(function(error){
      console.log(error);
    });
  },
	delete(id) {
    let self = this;
    return Ember.$.ajax({
      url: config.api.baseUrl + '/todo/'+id,
      type: "DELETE",
      dataType: 'JSON'
    }).then(function(resp){
      return self.featchAll();
    }).catch(function(error){
      console.log(error);
    });
	}
});
