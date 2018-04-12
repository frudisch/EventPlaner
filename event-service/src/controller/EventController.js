'use strict';

var mongoose = require('mongoose');
var Event = mongoose.model('Events');

exports.listEvents = function () {
    return new Promise((resolve, reject) => {
        Event.find({}, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    })
};

exports.getEvent = function (event) {
  return new Promise((resolve, reject) => {
      Event.find({ name: event.data.name }, function (err, result) {
          if (err) {
              reject(err);
          }
          resolve(result);
      });
  })
};

exports.createEvent = function (event) {
    console.log('got request');
    console.log(event);
    var newEvent = new Event(event.data);
    return new Promise((resolve, reject) => {
        newEvent.save(function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};

exports.updateEvent = function (event) {
    return new Promise((resolve, reject) => {
        Event.findOneAndUpdate({ name: event.data.name }, event.data, { new: true }, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
};

exports.deleteEvent = function (event) {
    return new Promise((resolve, reject) => {
        Event.remove({
            name: event.data.name
        }, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve({ message: 'Event successfully deleted' });
        });
    });
};
