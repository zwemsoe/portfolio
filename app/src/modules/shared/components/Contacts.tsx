import { Flex, HStack, Icon, IconButton, Link, VStack } from '@chakra-ui/react';
import { FaChessPawn, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useScreenWidth } from '../hooks';

const contacts = [
  {
    label: 'Github',
    icon: FaGithub,
    link: 'https://github.com/zwemsoe',
  },
  {
    label: 'LinkedIn',
    icon: FaLinkedin,
    link: 'https://www.linkedin.com/in/zwe-min-soe-0b15091a8',
  },
  {
    label: 'Email',
    icon: MdEmail,
    link: 'mailto: zwemsoe@gmail.com',
  },
  {
    label: 'Twitter',
    icon: FaTwitter,
    link: 'https://twitter.com/zweminsoe',
  },
];

export function Contacts() {
  const { isLargeScreen } = useScreenWidth();
  const mobileIconSize = { width: '1.5em', height: '1.5em' };
  const desktopIconSize = { width: '1.8em', height: '1.8em' };
  const iconSize = isLargeScreen ? desktopIconSize : mobileIconSize;
  return (
    <>
      {isLargeScreen ? (
        <DesktopView iconSize={iconSize} />
      ) : (
        <MobileView iconSize={iconSize} />
      )}
    </>
  );
}

const DesktopView = ({ iconSize }: { iconSize: any }) => {
  return (
    <Flex
      sx={{
        position: 'fixed',
        bottom: 10,
        right: 5,
      }}
      w={50}
    >
      <VStack spacing={'20px'} bg="dark">
        {contacts.map((item) => (
          <Link key={item.label} href={item.link} isExternal>
            <IconButton
              colorScheme="none"
              aria-label={item.label}
              icon={<Icon as={item.icon} style={iconSize} color="white" />}
            />
          </Link>
        ))}
      </VStack>
    </Flex>
  );
};

const MobileView = ({ iconSize }: { iconSize: any }) => {
  return (
    <Flex py={5} align="center" justify="center">
      <HStack spacing="20px">
        {contacts.map((item) => (
          <Link key={item.label} href={item.link} isExternal>
            <IconButton
              colorScheme="none"
              aria-label={item.label}
              icon={<Icon as={item.icon} style={iconSize} color="white" />}
            />
          </Link>
        ))}
      </HStack>
    </Flex>
  );
};
