import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params, transition) {
    return [
      {title: 'Welcome to my blog', content: 'hello everyone, welcome to my blog'},
      {title: 'A trip to remmeber', content: 'We went to a beautiful place this summar'}
    ];
  }
});
