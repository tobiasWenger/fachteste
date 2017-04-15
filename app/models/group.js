import DS from 'ember-data';
import Ember from 'ember';
import Formulas from './../utils/formulas';

const {
  Model,
  attr,
  belongsTo
} = DS;

const {
  computed,
  get
} = Ember;

export default Model.extend({
  men: attr('number'),
  points: attr('number'),

  task: belongsTo('task'),

  women: computed('men', 'task.number', function() {
    const men = get(this, 'men');
    const number = get(this, 'task.number');
    return 3 * number - men;
  }),


  mark: computed('men', 'women', 'points', 'task.number', 'task.ft.type', function() {
    const type = get(this, 'task.ft.type');
    const number = get(this, 'task.number');
    const men = get(this, 'men');
    const points = get(this, 'points');
    const women = get(this, 'women');

    if ( type && number ) {
      const formula = Formulas[type][`task${number}`];
      return formula(women, men, points);
    } else {
      return 0;
    }
  })

});
