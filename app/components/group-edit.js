import Ember from 'ember';

const {
  Component,
  get,
  set,
  computed
} = Ember;

export default Component.extend({
  maxPeople: computed('group.task.number', function() {
    const number = get(this, 'group.task.number');
    return 3 * number;
  }),

  change() {
    get(this, 'group').save();
  },

  actions: {
    changeMen(men) {
      const group = get(this, 'group');
      set(group, 'men', men);
      group.save();
    }
  }
});
