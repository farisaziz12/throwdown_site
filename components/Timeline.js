import React from "react";
import styles from "../styles/Timeline.module.css";
import { timelineContent } from "../content/timeline";

export default function Timeline() {
  return (
    <div>
      <div className={styles.page}>
        <div className={styles.timeline}>
          <div className={styles.timelinegroup}>
            <span className={styles.timelineyear}>
              Saturday 5th Dec 2020
            </span>
            {timelineContent.map((event) => (
              <div className={styles.timelinebox}>
                <div className={styles.timelinedate}>
                  <span className={styles.timelineday}>{event.time}</span>
                  <span className={styles.timelinemonth}>Event</span>
                </div>
                <div className={styles.timelinepost}>
                  <div className={styles.timelinecontent}>
                    <p>{event.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
