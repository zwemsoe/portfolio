import { Flex, HStack, IconButton, Icon, Link } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin, FaChessPawn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const contacts = [
  {
    label: "Email",
    icon: <Icon as={MdEmail} w={6} h={6} color='white' />,
    link: "mailto: zwemsoe@gmail.com",
  },
  {
    label: "Github",
    icon: <Icon as={FaGithub} w={6} h={6} color='white' />,
    link: "https://github.com/zwemsoe",
  },
  {
    label: "LinkedIn",
    icon: <Icon as={FaLinkedin} w={6} h={6} color='white' />,
    link: "https://www.linkedin.com/in/zwe-min-soe-0b15091a8",
  },
  {
    label: "Twitter",
    icon: <Icon as={FaTwitter} w={6} h={6} color='white' />,
    link: "https://twitter.com/zweminsoe",
  },
  {
    label: "Chess.com",
    icon: <Icon as={FaChessPawn} w={6} h={6} color='white' />,
    link: "https://www.chess.com/member/zsoe",
  },
];

export default function Footer() {
  return (
    <Flex py={5} id='contacts' align='center' justify='center'>
      <HStack spacing='50px'>
        {contacts.map((item) => (
          <Link key={item.label} href={item.link} isExternal>
            <IconButton
              colorScheme='none'
              aria-label={item.label}
              icon={item.icon}
            />
          </Link>
        ))}
      </HStack>
    </Flex>
  );
}
