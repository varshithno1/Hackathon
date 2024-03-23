const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  eventname: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  venue: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "venues",
    required: true,
  },

  fromTime: {
    type: Date,
    default: Date.now,
  },
  toTime: {
    type: Date,
    default: Date.now,
  },
  eventType: {
    // type: mongoose.Schema.Types.ObjectId,
    // ref: "eventType",
    // required: true,
    type: String,
    default: "event",
  },
  eventPhoto: {
    type: String,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  booked: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  ],
});

const events = mongoose.model("events", EventSchema);
module.exports = events;
