import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('settings');
  this.route('ftas');
  this.route('ftks');
  this.route('ftvs');
  this.route('ftus');

  this.route('ft', { path: '/ft/:ft_id' });
  this.route('group', { path: '/group/:group_id' });
  this.route('ps80');
});

export default Router;
