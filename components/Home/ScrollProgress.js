import { Flex, Icon, VStack } from '@chakra-ui/react';
import { FaCircle } from 'react-icons/fa';
import { useStateContext } from '@/utils/provider';

export default function ScrollProgress() {
  const [{ page }, dispatch] = useStateContext();
  return (
    <Flex
      sx={{
        position: 'fixed',
        top: '50%',
        left: 10,
      }}
      w="50px"
    >
      <VStack>
        {[...Array(4).keys()].map((item) => (
          <Icon
            key={item}
            as={FaCircle}
            w={2}
            h={2}
            color={item === page ? 'yellow' : 'light'}
          />
        ))}
      </VStack>
    </Flex>
  );
}
