import Ember from 'ember';
import DS from 'ember-data';
import Formulas from './../utils/formulas';

const {
  computed,
  get
} = Ember;

const {
  Model,
  attr,
  belongsTo,
  hasMany
} = DS;

export default Model.extend({
  ft: belongsTo('fachtest', { inverse: null }),
  number: attr('number'),
  groups: hasMany('group', { dependent: 'destroy' }),

  men: computed('groups.@each.men', function() {
    const groups = get(this, 'groups');
    let sumMen = 0;

    groups.forEach((group) => {
      sumMen += get(group, 'men');
    });

    return sumMen;
  }),

  women: computed('groups.@each.women', function() {
    const groups = get(this, 'groups');
    let sumWomen = 0;

    groups.forEach((group) => {
      sumWomen += get(group, 'women');
    });

    return sumWomen;
  }),

  points: computed('groups.@each.points', function() {
    const groups = get(this, 'groups');
    let sumPoints = 0;

    groups.forEach((group) => {
      sumPoints += parseInt(get(group, 'points'));
    });

    return sumPoints;
  }),

  mark: computed('men', 'women', 'points', 'ft.type', 'number', 'groups.[]', function() {
    const men = get(this, 'men');
    const women = get(this, 'women');
    const points = get(this, 'points');
    const number = get(this, 'number');
    const type = get(this, 'ft.type');

    const numberOfGroups = get(this, 'groups.length');

    const pointsAVG = parseFloat((points / numberOfGroups).toFixed(3));


    if ( type && number ) {
      const formula = Formulas[type][`task${number}`];
      return formula(women, men, pointsAVG);
    } else {
      return 0;
    }
  }),
});
