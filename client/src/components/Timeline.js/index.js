import React from "react";
import "./style.css";
import timelineData from "../../data.js";
import TimelineItem from "../TimelineItem.js";

const Timeline = () => timelineData.length > 0 && (
    <div className="timeline-container">
        {timelineData.map((data, index) => (
            <TimelineItem data={data} key={index} />
        ))}
    </div>
);

export default Timeline;