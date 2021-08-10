import React, { useEffect, useState } from "react";
import moment from "moment";

export const ExpirationDate = ({ expiration }) => {
  const [timer, setTimer] = useState("");
  const [state, setState] = useState();

  useEffect(() => {
    const minute = 60;
    const hour = 60 * minute;
    const day = 24 * hour;
    const offer = moment(expiration);
    let today = moment();

    function secondsToString(seconds) {
      var days = Math.floor((seconds / day) % 365);
      days = days < 10 ? "0" + days + " day " : days + " days ";

      var hours = Math.floor((seconds / hour) % 24);
      hours = hours < 10 ? "0" + hours + " hour " : hours + " hours ";

      return days + " : " + hours;
    }
    setState(offer.diff(today, "seconds"));
    setTimer(secondsToString(state));
  }, [state]);
  return (
    <div className="green is-flex is-justify-content-flex-end">
      <h2 className="mr-1">This offer expires in </h2>
      <p>{timer}</p>
    </div>
  );
};
