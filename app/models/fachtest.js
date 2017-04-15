import Ember from 'ember';
import DS from 'ember-data';

const {
  computed,
  get,
  getProperties
} = Ember;

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({
  date: attr('string'),
  type: attr('string'),

  task1: belongsTo('task', { dependent: 'destroy' }),
  task2: belongsTo('task', { dependent: 'destroy' }),

  mark: computed('task1.{men,women,mark}', 'task2.{men,women,mark}', function() {
    const { task1, task2 } = getProperties(this, 'task1', 'task2');

    const markTask1 = parseFloat(get(task1, 'mark').toFixed(2));
    const menTask1 = get(task1, 'men');
    const womenTask1 = get(task1, 'women');
    const sumTask1 = menTask1 + womenTask1;

    const markTask2 = parseFloat(get(task2, 'mark').toFixed(2));
    const menTask2 = get(task2, 'men');
    const womenTask2 = get(task2, 'women');
    const sumTask2 = menTask2 + womenTask2;

    const mark = (markTask1 * sumTask1 + markTask2 * sumTask2) / (sumTask1 + sumTask2);
    return mark;
  })
});
