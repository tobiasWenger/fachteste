import Ember from 'ember';

const {
  Component,
  computed,
  get
} = Ember;

export default Component.extend({
  task: computed('ft', 'number', function() {
    const ft = get(this, 'ft');
    const number = get(this, 'number');
    return get(ft, `task${number}`);
  })
});
