const express = require("express");
const router = express.Router();
const events = require("../models/eventModel");
const users = require("../models/accountModel");
const venues = require("../models/venueModel");

router.get("/", async (req, res) => {
  const filter = req.query.filter || "";

  try {
    let eventsList = await events
      .find({
        $or: [
          { eventname: { $regex: filter } },
          { eventType: { $regex: filter } },
        ],
      })
      .populate("createdBy", "username")
      .populate("venue", "venuename location");

    eventsList = eventsList.map((event) => ({
      eventname: event.eventname,
      description: event.description,
      fromTime: event.fromTime,
      toTime: event.toTime,
      eventType: event.eventType,
      eventPhoto: event.eventPhoto,
      createdBy: event.createdBy ? event.createdBy.username : "",
      venue: event.venue
        ? {
            venuename: event.venue.venuename,
            location: event.venue.location,
          }
        : { venuename: "", location: "" },
    }));

    res.json({ events: eventsList });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

route.get("/tickets", async(req, res) => {
  
})

// router.get("/all", async (req, res) => {
//   const userId = req.user._id;
//   const filter = await events.find({ createdBy: userId });
//   console.log(filter);
// });

router.post("/book/:id", async (req, res) => {
  const { id } = req.params;

  const event = await events.findById(id);
  event.booked.push(req.user._id);
  req.user.events.push(event._id);

  res.json({
    msg: "Added",
  });
});

module.exports = router;
