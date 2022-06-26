import { Button, Heading, Stack } from '@chakra-ui/react';
import { HOME_VIEW } from '@/constants';
import { ActionTypes } from '@/state/actions';
import { useStateContext } from '@/state/provider';

export function Landing() {
  const { dispatch } = useStateContext();
  return (
    <Stack>
      <span
        onClick={() => {
          dispatch({
            type: ActionTypes.SetPage,
            payload: HOME_VIEW.ABOUT,
          });
        }}
      >
        <Heading size="2xl" fontWeight="bold">
          {"Hi, I'm Zwe Min Soe."}
        </Heading>

        <Heading size="xl" fontWeight="normal">
          Aspiring Full-Stack Developer. React & Node Enthusiast. Avid Chess
          Player.
        </Heading>
      </span>
      <br />
      <Button
        borderColor="yellow"
        variant="outline"
        w="150px"
        _hover={{ bg: 'gray' }}
        onClick={() => {
          dispatch({
            type: ActionTypes.SetPage,
            payload: HOME_VIEW.CONTACT,
          });
        }}
      >
        <Heading size="sm" fontWeight="bold" color="yellow">
          GET IN TOUCH!
        </Heading>
      </Button>
    </Stack>
  );
}
