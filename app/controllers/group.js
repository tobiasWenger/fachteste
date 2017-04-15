import Ember from 'ember';

const {
  Controller,
  computed: { alias },
  get
} = Ember;

export default Controller.extend({
  group: alias('model'),

  actions: {
    delete() {
      const group = get(this, 'group');
      const ft = get(group, 'ft');

      group.destroyRecord().then(() => {
        this.transitionToRoute('ft', ft);
      });
    }
  }
});
