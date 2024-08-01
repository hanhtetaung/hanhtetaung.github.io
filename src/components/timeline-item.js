import {
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
} from "@material-tailwind/react";


export default function TimeLineItem({stage, sentence}) {
    return (
        <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
                <TimelineIcon />
                <Typography variant="h5" className="text-base">
                    {stage}
                </Typography>
            </TimelineHeader>

            <TimelineBody className="pb-8">
                <Typography variant="small" className="font-normal">
                    {sentence}
                </Typography>
            </TimelineBody>
      </TimelineItem>
    )
}