const mongoose = require("mongoose");

const VenueSchema = new mongoose.Schema({
  venuename: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    default: "No Location",
  },
});

const venues = mongoose.model("venues", VenueSchema);
module.exports = venues;
