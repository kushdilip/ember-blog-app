import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params, transition) {
    return [
      {id: 1, title: 'Welcome to my blog', content: 'hello everyone, welcome to my blog'},
      {id: 2, title: 'A trip to remmeber', content: 'We went to a beautiful place this summar'}
    ];
  }
});
