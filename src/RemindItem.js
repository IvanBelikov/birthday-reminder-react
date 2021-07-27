import React from "react";

const ReminderItem = (props) => {
  const { image, name, age } = props;

  return (
    <article className="remind-item">
      <div className="person">
        <img src={image} alt="Person" className="person-img" />
        <div className="person-info">
          <h3 className="person-name">{name}</h3>
          <p>{age} years</p>
        </div>
      </div>
      <button className="congratulate-btn">Message</button>
    </article>
  );
};

export default ReminderItem;
