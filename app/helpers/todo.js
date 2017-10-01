import Ember from 'ember';

export function todo(params/*, hash*/) {
  let cont = 0;
  params[0].map(function(item){
    if(item.active == 1){
      cont++;
    }
  })
  return cont;
}

export default Ember.Helper.helper(todo);
