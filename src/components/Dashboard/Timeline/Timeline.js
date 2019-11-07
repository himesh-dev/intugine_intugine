import React from "react";
import "./Timeline.css";

export default function Timeline(props) {
  return (
    <div className="timeline">
      <ul className="steps-item">
        {props.timeline &&
          props.timeline.map(t => {
            const date = new Date(t.time);
            const date_str = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
            const time_str = `${date.getUTCHours()}:${date.getUTCMinutes()}`;
            return (
              <li
                className={t.status_detail == "DELIVERED" ? "final-step" : ""}
              >
                <div className="row" style={{ display: "flex" }}>
                  <div className="step-status" style={{ flex: 2 }}>
                    {t.status_detail}
                  </div>
                  <div className="step-date" style={{ flex: 1 }}>
                    {date_str}
                  </div>
                  <div className="step-time" style={{ flex: 1 }}>
                    {time_str}
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
