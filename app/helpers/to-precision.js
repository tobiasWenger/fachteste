import Ember from 'ember';

export function toPrecision([number, precision]/*, hash*/) {
   return number.toPrecision(precision);
}

export default Ember.Helper.helper(toPrecision);
