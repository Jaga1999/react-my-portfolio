import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="April 2022 - September 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h4 className="vertical-timeline-element-subtitle">
          Software Engineer Trainee - Inode Technologies PVT LTD
          </h4>
          <h4 className="vertical-timeline-element-subtitle">
            Bengaluru, Karnataka 560021
          </h4>
          <p>Web development with PHP and MYSQL</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="February 2021 - February 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Non-Engineer Trainee - Tenneco Automotive PVT LTD
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Hosur, TamilNadu 635109
          </h4>
          <p>
            Helped the team by Recording the stock and reorder the material required.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Krishna Arts and Science College, Krishnagiri
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Master's Degree
          </h4>
          <p> Computer Science </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            MGR College (Arts and Science), Hosur
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
