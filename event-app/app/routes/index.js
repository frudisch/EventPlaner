import Route from '@ember/routing/route';
import fetch from 'ember-fetch/ajax';

export default Route.extend({
  model() {
    return fetch('http://192.168.99.100.nip.io/event/list')
      .then(function(response) {
        return response;
      });
  }
});
