import Ember from 'ember';

export function range(params/*, hash*/) {
  var start = params[0];
  var count = params[1];

  var ret = [];
  for(var i=0;i<count;i++) {
    ret.push(i+start);
  }
  return ret;
}

export default Ember.Helper.helper(range);
