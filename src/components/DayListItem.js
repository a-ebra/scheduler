import React from "react";
import "components/DayListItem.scss";
import classNames from 'classnames';


export default function DayListItem(props) {
  let dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": (props.spots === 0)
  });
  
  const remainingSpots = (spots) => {
    if (!spots) {
      return `No spots left!`
    }
    if (spots === 1) {
      return `1 spot left!`
    }
    if (spots > 1) {
      return `${spots} left!`
    }
  }

  return (
    <li className = {dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{remainingSpots(props.spots)}</h3>
    </li>
  );
}

