const express = require("express");
const eventNames = require("../models/eventModel");
const events = require("../models/eventModel");
const router = express.Router();

router.get("/", async (req, res) => {
  const filter = req.query.filter || "";

  const events = await eventNames.find({
    $or: [
      {
        eventname: {
          $regex: filter,
        },
      },
      {
        eventType: {
          $regex: filter,
        },
      },
    ],
  });

  // events = events.map((m) => {
  //   let a = {};
  //   // a.m.eventType = m.eventType;
  //   a.m.eventname = m.eventname;
  //   a.m.fromTime = m.fromTime;
  //   a.m.toTime = m.toTime;
  // });

  res.json({
    events: events,
  });
});

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
