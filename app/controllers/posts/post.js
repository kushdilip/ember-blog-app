import Ember from 'ember';

export default Ember.Controller.extend({
  isEdit: false,
  actions: {
    toggleEdit(){
      this.toggleProperty('isEdit');
    }
  }
});