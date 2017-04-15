import Ember from 'ember';

const {
  Component,
  computed,
  get
} = Ember;

export default Component.extend({
  men: computed('group.men', function() {
    const number = get(this, 'group.men');
    let men = Ember.A();
    for (var i = 0; i < number; i++) {
      men.pushObject(number);
    }
    return men;
  }),

  women: computed('group.women', function() {
    const number = get(this, 'group.women');
    let women = Ember.A();
    for (var i = 0; i < number; i++) {
      women.pushObject(number);
    }
    return women;
  })
});
