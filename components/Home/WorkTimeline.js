import { Heading, Text } from '@chakra-ui/react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import { Fragment } from 'react';

const items = [
  {
    date: 'March, 2020',
    title: 'Join BridgeBurma as Software Engineer Intern',
  },
  {
    date: 'Aug, 2020',
    title: 'Continue at BridgeBurma as Full-Time Software Engineer',
  },
  {
    date: 'Jan, 2021',
    title: 'Promoted to Senior Software Engineer at BridgeBurma',
  },
  { date: 'May, 2021', title: 'Join BYO as Full-Stack Software Developer' },
  {
    date: 'Sep, 2021',
    title: 'Start Co-op at ATB Financial as Junior Software Developer',
  },
];

export default function DevTimeline() {
  return (
    <Fragment>
      <Timeline align="alternate">
        {items.map((item, i) => (
          <TimelineItem key={i}>
            <TimelineOppositeContent>
              <Text color="yellow" fontWeight="medium">
                {item.date}
              </Text>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot style={{ background: '#FBD802' }} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Heading size="xs" fontWeight="normal">
                {item.title}
              </Heading>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Fragment>
  );
}
