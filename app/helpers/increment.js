import Ember from 'ember';

export function increment(params/*, hash*/) {
  return params[0] + params[1];
}

export default Ember.Helper.helper(increment);
