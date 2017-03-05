import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.debug(params);
    return Ember.RSVP.hash({
      search: params.search,
      word: this.store.findRecord('word', params.search)
    });
  }
});
