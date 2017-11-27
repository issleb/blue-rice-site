import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  //host: 'http://localhost:5000',
  host: 'https://devapi.bluericecomic.com',
  namespace: 'api'
});