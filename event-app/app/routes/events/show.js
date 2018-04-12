import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    console.log(params.event_name);
    return fetch('http://192.168.99.100.nip.io/event/get', {"name": params.event_name})
      .then(function(response) {
        console.log(response.body);
        return response;
      });
  }
});
