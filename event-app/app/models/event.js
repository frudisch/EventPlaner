import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  Created_date: DS.attr(),
  date: DS.attr(),
  status: DS.attr()
});
