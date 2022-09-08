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
    date: 'Jan 2021 - Present',
    title: 'Lead Software Engineer at BridgeBurma',
  },
  {
    date: 'May 2021 - Sep 2021',
    title: 'Full-Stack Software Developer at BYO',
  },
  {
    date: 'Sep 2021 - Apr 2022',
    title: 'Co-op at ATB Financial as Junior Software Developer',
  },
  {
    date: 'Aug 2022 - Present',
    title: 'Part-time Frontend Engineer position at Aquanow',
  },
];

export function WorkTimeline() {
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
