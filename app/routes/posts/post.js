import Ember from 'ember';

export default Ember.Route.extend({
  model(params, transition){
  	let posts = this.modelFor('posts');
  	let id = +params.id;
    let [post] = posts.filterBy('id', id);
  	return post;
  }
});
