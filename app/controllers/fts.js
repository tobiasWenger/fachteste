import Ember from 'ember';

const {
  Controller,
  get,
  computed,
  RSVP: { Promise }
} = Ember;

export default Controller.extend({
  fts: computed('model.@each.type', 'type', function() {
    const type = get(this, 'type');
    return get(this, 'model').filterBy('type', type);
  }),

  actions: {
    add() {
      const now = new Date();
      const type = get(this, 'type');
      const store = get(this, 'store');

      const task1 = store.createRecord('task', {
        number: 1
      });

      const task2 = store.createRecord('task', {
        number: 2
      });

      const ft = store.createRecord('fachtest', {
        date: now.toISOString(),
        type: type,
        task1: task1,
        task2: task2
      });

      ft.save().then(() => {
        return Promise.all([
          task1.save(),
          task2.save()
        ]);
      }).then(() => {
        return ft.save();
      }).then(() => {
        this.transitionToRoute('ft', ft);
      });
    },

    delete() {
      const fts = get(this, 'fts').toArray();

      fts.forEach((ft) => {
        ft.destroyRecord();
      });
    }
  }
});
