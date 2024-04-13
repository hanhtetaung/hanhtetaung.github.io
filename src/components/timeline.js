import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Card,
  CardBody,
  } from "@material-tailwind/react";
   
export default function DefaultTimeline() {
  return (
    
   
        <div>
          <Timeline>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader className="h-3">
                <TimelineIcon />
                <Typography variant="h6" color="blue-gray" className="leading-none">
                  Initial Stage
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8 container">
                <Typography variant="small" color="gray" className="font-normal text-gray-600">
                I created software without understanding the core principles of computer science. It was okay, but I felt uneasy when dealing with challenges.
                </Typography>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader className="h-3">
                <TimelineIcon />
                <Typography variant="h6" color="blue-gray" className="leading-none">
                  Second Stage
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography variant="small" color="gray" className="font-normal text-gray-600">
                I've been learning the fundamental concepts in computer science, like how computers are built, how they work, and how to write code efficiently. Now, when I develop software, I apply this knowledge, and I feel confident in what I'm doing.
                </Typography>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader className="h-3">
                <TimelineIcon />
                <Typography variant="h6" color="blue-gray" className="leading-none">
                  Third Stage
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography variant="small" color="gray" className="font-normal text-gray-600">
                I'm now exploring software engineering and design patterns. Understanding these concepts helps me build software more effectively. It's enjoyable to see how these principles improve the quality of my work.
                </Typography>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem>
              <TimelineHeader className="h-3">
                <TimelineIcon />
                <Typography variant="h6" color="blue-gray" className="leading-none">
                  Still Counting
                </Typography>
              </TimelineHeader>
              
            </TimelineItem>
            
          </Timeline>
        </div>
    
  );
}

// import {
//   Card,
//   CardBody,
//   CardFooter,
//   Typography,
//   Button,
// } from "@material-tailwind/react";
 
// export function CardWithLink() {
//   return (
//     <Card className="mt-6 w-96">
//       <CardBody>
//         <div className="w-[32rem]">
//           <Timeline>
//             <TimelineItem>
//               <TimelineConnector />
//               <TimelineHeader className="h-3">
//                 <TimelineIcon />
//                 <Typography variant="h6" color="blue-gray" className="leading-none">
//                   Initial Stage
//                 </Typography>
//               </TimelineHeader>
//               <TimelineBody className="pb-8">
//                 <Typography variant="small" color="gray" className="font-normal text-gray-600">
//                 I created software without understanding the core principles of computer science. It was okay, but I felt uneasy when dealing with challenges.
//                 </Typography>
//               </TimelineBody>
//             </TimelineItem>
//             <TimelineItem>
//               <TimelineConnector />
//               <TimelineHeader className="h-3">
//                 <TimelineIcon />
//                 <Typography variant="h6" color="blue-gray" className="leading-none">
//                   Second Stage
//                 </Typography>
//               </TimelineHeader>
//               <TimelineBody className="pb-8">
//                 <Typography variant="small" color="gray" className="font-normal text-gray-600">
//                 I've been learning the fundamental concepts in computer science, like how computers are built, how they work, and how to write code efficiently. Now, when I develop software, I apply this knowledge, and I feel confident in what I'm doing.
//                 </Typography>
//               </TimelineBody>
//             </TimelineItem>
//             <TimelineItem>
//               <TimelineConnector />
//               <TimelineHeader className="h-3">
//                 <TimelineIcon />
//                 <Typography variant="h6" color="blue-gray" className="leading-none">
//                   Third Stage
//                 </Typography>
//               </TimelineHeader>
//               <TimelineBody className="pb-8">
//                 <Typography variant="small" color="gray" className="font-normal text-gray-600">
//                 I'm now exploring software engineering and design patterns. Understanding these concepts helps me build software more effectively. It's enjoyable to see how these principles improve the quality of my work.
//                 </Typography>
//               </TimelineBody>
//             </TimelineItem>
//             <TimelineItem>
//               <TimelineHeader className="h-3">
//                 <TimelineIcon />
//                 <Typography variant="h6" color="blue-gray" className="leading-none">
//                   Still Counting
//                 </Typography>
//               </TimelineHeader>
              
//             </TimelineItem>
            
//           </Timeline>
//         </div>
//       </CardBody>
//     </Card>
//   );
// }