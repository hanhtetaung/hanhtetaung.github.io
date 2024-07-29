import {
  Timeline,
} from "@material-tailwind/react";

import TimeLineItem from "./timeline-item";
   
export default function DefaultTimeline() {
  return (
        <div>
          <Timeline>
            <TimeLineItem stage="Initial Stage" sentence="Developing software without fundamental computer science principles" />

            <TimeLineItem stage="Second Stage" sentence="Studying fundamental concepts in Computer Architecture, Operating System, Data Structure & Algorithms and Programming Languages" />

            <TimeLineItem stage="Third Stage" sentence="Utilizing tools to simplify the development process" />
            <TimeLineItem stage="Still Counting" sentence="" />
          </Timeline>
        </div>
    
  );
}