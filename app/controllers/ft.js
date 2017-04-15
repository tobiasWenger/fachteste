import Ember from 'ember';

const {
  Controller,
  computed,
  computed: { alias },
  get
} = Ember;

export default Controller.extend({
  ft: alias('model'),

  parentRoute: computed('ft.type', function() {
    const type = get(this, 'ft.type');
    return `ft${type.charAt(0)}s`;
  }),

  actions: {
    delete() {
      const ft = get(this, 'ft');
      const parentRoute = get(this, 'parentRoute');
      ft.destroyRecord().then(() => {
        this.transitionToRoute(parentRoute);
      });
    },

    addGroup(task) {
      const store = get(this, 'store');
      const number = get(task, 'number');

      const group = store.createRecord('group', {
        men: 3 * number,
        task: task
      });

      get(task, 'groups').pushObject(group);

      group.save().then(() => {
        return task;
      }).then((resolvedTask) => {
        return resolvedTask.save();
      }).then(() => {
        this.transitionToRoute('group', group);
      });
    }
  }
});
