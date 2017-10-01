import Ember from 'ember';

export function complited(params/*, hash*/) {
  let cont = 0;
  params[0].map(function(item){
    if(item.active == 0){
      cont++;
    }
  })
  return cont;
}

export default Ember.Helper.helper(complited);
