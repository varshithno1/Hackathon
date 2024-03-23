import React from "react";

const OneEvent = ({ obj }) => {
  return (
    <div className="border bg-slate-100 p-5 m-2">
      <div>Event Name: {obj.eventname}</div>
      <div>Description: {obj.description}</div>
      <div>Venue: {obj.venue && obj.venue.venuename}</div>{" "}
      <div>From Time: {obj.fromTime}</div>
      <div>To Time: {obj.toTime}</div>
      <div>Event Type: {obj.eventType}</div>
      <div>Event Photo: {obj.eventPhoto}</div>
      <div>Created By: {obj.createdBy}</div>
    </div>
  );
};

export default OneEvent;
