import Ember from 'ember';

const {
  Controller,
  get,
  computed: { alias }
} = Ember;

export default Controller.extend({
  fts: alias('model'),

  actions: {
    delete() {
      const fts = get(this, 'fts').toArray();
      fts.forEach((ft) => {
        ft.destroyRecord();
      });
    }
  }
});
