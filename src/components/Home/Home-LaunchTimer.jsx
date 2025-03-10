import React, { useState, useEffect } from "react";
import "../../stylesheet/Home-Counter.css";

const zerofill = (value) => (value < 10 && value > -1 ? "0" : "") + value;

const Tracker = ({ property, time }) => {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (time[property] === undefined) {
      setShow(false);
      return;
    }

    const val = time[property];
    setShow(true);

    if (val !== current) {
      setPrevious(current);
      setCurrent(val);
    }
  }, [property, time, current]);

  return (
    <span
      style={{ display: show ? "inline-block" : "none" }}
      className="flip-clock__piece"
    >
      <span className={`flip-clock__card flip-card ${show ? "flip" : ""}`}>
        <b className="flip-card__top">{zerofill(current)}</b>
        <b className="flip-card__bottom" data-value={zerofill(current)}></b>
        <b className="flip-card__back" data-value={zerofill(previous)}></b>
        <b
          className="flip-card__back-bottom"
          data-value={zerofill(previous)}
        ></b>
      </span>
      <span className="flip-clock__slot">{property}</span>
    </span>
  );
};

const Countdown = () => {
  const [time, setTime] = useState({});
  const launchDate = new Date("2024-03-20T00:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = launchDate - now;
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      setTime({ Days: days, Hours: hours, Minutes: minutes, Seconds: seconds });
    } else {
      setTime({ Days: 0, Hours: 0, Minutes: 0, Seconds: 0 });
    }
  };

  useEffect(() => {
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flip-clock w-92 h-48 float-right pr-[10%] sm:float-none sm:pr-[0] sm:flex sm:w-[100%] sm:text-center gap-[2rem] sm:pl-[20%]" data-date={launchDate}>
      {["Days", "Hours", "Minutes", "Seconds"].map((tracker) => (
        <Tracker key={tracker} property={tracker} time={time} />
      ))}
    </div>
  );
};

export default Countdown;