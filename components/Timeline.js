import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { timelineContent } from "../content/timeline";

export default function Timeline() {
    return (
        <VerticalTimeline>
            {timelineContent.map((event) => (
                <VerticalTimelineElement
                    key={event.time}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: "#34ac54",
                        color: "#fff",
                    }}
                    contentArrowStyle={{
                        borderRight: "7px solid  #34ac54",
                    }}
                    iconStyle={{
                        background: "#34ac54",
                        color: "#fff",
                    }}
                >
                    <h3 className="vertical-timeline-element-title">
                        {event.time}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        {event.event}
                    </h4>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    );
}
