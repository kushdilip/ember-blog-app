import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts', { path: '/posts'}, function() {
    this.route('post', { path: '/:id'});
  });
});

export default Router;