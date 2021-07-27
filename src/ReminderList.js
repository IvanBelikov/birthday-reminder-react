import React from "react";

// Data
import people from "./data";

// Components
import ReminderItem from "./RemindItem";

const ReminderList = () => {
  return (
    <div className="reminder-list">
      <h1>Reminder List</h1>
      <p>Persons who celebrating his birthday!</p>
      <div className="reminders">
        <p>
          Birthday today:{" "}
          <span className="birthday-counter">{people.length}</span>
        </p>
        {people.map(({ name, age, image, id }) => (
          <ReminderItem name={name} age={age} image={image} key={id} />
        ))}
      </div>
    </div>
  );
};

export default ReminderList;
