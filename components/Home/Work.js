import {
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  Spacer,
  Stack,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/react';
import { DiMongodb } from 'react-icons/di';
import { FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import WorkTimeline from './WorkTimeline';
import { HOME_VIEW } from '@/constants';
import { SET_PAGE } from '@/utils/actions';
import useScreenWidth from '@/utils/hooks/useScreenWidth';
import { useStateContext } from '@/utils/provider';

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
              <Tooltip
                key={item.label}
                label={item.label}
                fontSize="md"
                bg="yellow"
                color="black"
              >
                <span>
                  <Icon as={item.icon} style={iconSize} color={item.color} />
                </span>
              </Tooltip>
            ))}
          </HStack>
        </Center>
      </Stack>
    </span>
  );
}
