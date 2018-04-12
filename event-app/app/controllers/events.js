import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByName(param) {
      if (param !== '') {
        return this.get('store').query('event', { name: param });
      } else {
        return this.get('store').findAll('event');
      }
    }
  }
});
