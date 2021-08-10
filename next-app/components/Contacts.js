import { Flex, VStack, HStack, IconButton, Icon, Link } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin, FaChessPawn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import useScreenWidth from "../hooks/useScreenWidth";

const contacts = [
  {
    label: "Github",
    icon: FaGithub,
    link: "https://github.com/zwemsoe",
  },
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/zwe-min-soe-0b15091a8",
  },
  {
    label: "Email",
    icon: MdEmail,
    link: "mailto: zwemsoe@gmail.com",
  },
  {
    label: "Twitter",
    icon: FaTwitter,
    link: "https://twitter.com/zweminsoe",
  },
  {
    label: "Chess.com",
    icon: FaChessPawn,
    link: "https://www.chess.com/member/zsoe",
  },
];

export default function Contacts() {
  const { isLargeScreen } = useScreenWidth();
  const mobileIconSize = { width: "1.5em", height: "1.5em" };
  const desktopIconSize = { width: "2em", height: "2em" };
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

const DesktopView = ({ iconSize }) => {
  return (
    <Flex
      sx={{
        position: "fixed",
        bottom: 10,
        right: 5,
      }}
      w={50}
    >
      <VStack spacing={"20px"}>
        {contacts.map((item) => (
          <Link key={item.label} href={item.link} isExternal>
            <IconButton
              colorScheme='none'
              aria-label={item.label}
              icon={<Icon as={item.icon} style={iconSize} color='white' />}
            />
          </Link>
        ))}
      </VStack>
    </Flex>
  );
};

const MobileView = ({ iconSize }) => {
  return (
    <Flex py={5} id='contacts' align='center' justify='center'>
      <HStack spacing='50px'>
        {contacts.map((item) => (
          <Link key={item.label} href={item.link} isExternal>
            <IconButton
              colorScheme='none'
              aria-label={item.label}
              icon={<Icon as={item.icon} style={iconSize} color='white' />}
            />
          </Link>
        ))}
      </HStack>
    </Flex>
  );
};
