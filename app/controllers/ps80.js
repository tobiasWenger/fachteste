import Ember from 'ember';

const {
  Controller,
  get,
  computed
} = Ember;

export default Controller.extend({
  men: 4,
  women: 4,
  time: '',
  trackType: 'Kunststoff',

  trackTypes: [
    'Kunststoff',
    'Rasen',
    'Wiese'
  ],

  mark: computed('men', 'women', 'time', 'trackType', function() {
    const men = parseFloat(get(this, 'men'));
    const women = parseFloat(get(this, 'women'));
    const time = parseFloat(get(this, 'time'));
    const trackType = get(this, 'trackType');

    let mark;

    if ( men >= 0 && women >= 0 && time >= 0 ) {
      const d = time / (men + women);

      switch (trackType) {
        case 'Kunststoff':
          mark = (((18.6*women+14.2*men)/(women+men))-d)/((0.8*women+0.5*men)/(women+men));
          break;
        case 'Rasen':
          mark = (((18.9*women+14.5*men)/(women+men))-d)/((0.8*women+0.5*men)/(women+men));
          break;
        case 'Wiese':
          mark = (((19.2*women+14.8*men)/(women+men))-d)/((0.8*women+0.5*men)/(women+men));
          break;
      }

    }

    return mark;
  })

});
