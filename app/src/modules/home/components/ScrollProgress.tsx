import { Flex, Icon, VStack } from '@chakra-ui/react';
import { FaCircle } from 'react-icons/fa';
import { ActionTypes } from '@/state/actions';
import { useStateContext } from '@/state/provider';

export function ScrollProgress() {
  const {
    state: { page },
    dispatch,
  } = useStateContext();
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
            w={3}
            h={3}
            color={item === page ? 'yellow' : 'light'}
            onClick={() => {
              dispatch({
                type: ActionTypes.SetPage,
                payload: item,
              });
            }}
            _hover={{ cursor: 'pointer' }}
          />
        ))}
      </VStack>
    </Flex>
  );
}
