import {
  Button,
  Text,
  VStack,
  Flex,
  Icon,
  Heading,
  Stack,
  Spacer,
  HStack,
  Center,
} from '@chakra-ui/react';
import { useStateContext } from '@/utils/provider';
import { SET_PAGE } from '@/utils/actions';
import WorkTimeline from './WorkTimeline';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import useScreenWidth from '@/utils/hooks/useScreenWidth';
import { HOME_VIEW } from '@/constants';

const skills = [
  {
    label: 'ReactJS',
    icon: FaReact,
    color: '#88FFF7',
  },
  {
    label: 'NodeJS',
    icon: FaNodeJs,
    color: 'green',
  },
  {
    label: 'MongoDB',
    icon: DiMongodb,
    color: 'green',
  },
  {
    label: 'Python',
    icon: FaPython,
    color: 'yellow',
  },
];

export default function Work() {
  const [{ page }, dispatch] = useStateContext();
  const { isLargeScreen } = useScreenWidth();
  const mobileIconSize = { width: '2em', height: '2em' };
  const desktopIconSize = { width: '3em', height: '3em' };
  const iconSize = isLargeScreen ? desktopIconSize : mobileIconSize;
  return (
    <span
      onClick={() => {
        dispatch({
          type: SET_PAGE,
          page: HOME_VIEW.CONTACT,
        });
      }}
    >
      <Stack>
        <Center>
          <Heading size="lg" fontWeight="bold" color="white">
            Work Timeline
          </Heading>
        </Center>
        {isLargeScreen && <br />}
        <WorkTimeline />
        <br />
        <Center>
          <Heading size="lg" fontWeight="bold" color="white">
            Top Skills
          </Heading>
        </Center>
        {isLargeScreen && <br />}
        <Center>
          <HStack spacing={35}>
            {skills.map((item) => (
              <Icon
                key={item.label}
                as={item.icon}
                style={iconSize}
                color={item.color}
              />
            ))}
          </HStack>
        </Center>
      </Stack>
    </span>
  );
}
