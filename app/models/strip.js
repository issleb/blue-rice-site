import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
    number: DS.attr(),
    description: DS.attr(),

    url: Ember.computed('number', function() {
        return `https://s3-us-west-2.amazonaws.com/bluerice/strips/${this.get('number')}.gif`;
      }) 
});
