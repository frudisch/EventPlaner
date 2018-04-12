'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EventSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the event'
  },
  description: {
    type: String,
    required: 'Kindly enter the description of the event'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['planned', 'ongoing', 'happened']
    }],
    default: ['planned']
  }
});

module.exports = mongoose.model('Events', EventSchema);
