import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineData } from "./timelineData.js";
import "./timeline.css";

const Timeline = () => {
  return (
    <div className="timeline">
      <h1 className="timeline-title">TIMELINE</h1>
      <VerticalTimeline lineColor="#228b22">
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.date}
            iconClassName="timeline-icon"
            icon={
              item.icon ? (
                <img src={item.icon} className="timeline-svg-icon" />
              ) : null
            }
          >
            <h3 className="vertical-timeline-element-title">{item.heading}</h3>
            {item.subheading && (
              <h4 className="vertical-timeline-element-subtitle">
                {item.subheading}
              </h4>
            )}
            {item.description.includes("*") ? (
              <ul>
                {item.description
                  .trim()
                  .split("\n")
                  .map((line, i) =>
                    line.trim().startsWith("*") ? (
                      <li key={i}>{line.trim().substring(1).trim()}</li>
                    ) : (
                      <p key={i}>{line.trim()}</p>
                    )
                  )}
              </ul>
            ) : (
              <p>{item.description.trim()}</p>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
