var mongoose = require('mongoose'),
    Event = require('./src/domain/EventModel'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongodb.default/EventDB');

var controller = require('./src/controller/EventController'); //importing route

module.exports = {
    create: function (event, data) { return controller.createEvent(event, data) },
    delete: function (event, data) { return controller.deleteEvent(event, data) },
    list: function (event, data) { return controller.listEvents(event, data) },
    get: function (event, data) { return controller.getEvent(event, data) },
    update: function (event, data) { return controller.updateEvent(event, data) },
}
