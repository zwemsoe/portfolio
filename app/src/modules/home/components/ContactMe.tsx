import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  IconButton,
  Input,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { HOME_VIEW } from '@/constants';
import { ActionTypes } from '@/state/actions';
import { useStateContext } from '@/state/provider';
import { validateEmail } from '@/utils/misc';
import { requestAPI } from '@/utils/requestAPI';

export function ContactMe() {
  const { dispatch } = useStateContext();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    setSubmitting(true);
    if (name && email && subject && message) {
      if (validateEmail(email)) {
        const { success } = await requestAPI({
          method: 'POST',
          data: { name, email, subject, message },
          endpoint: '/api/add-contact',
        });
        if (success) {
          setError('');
          setEmail('');
          setName('');
          setSubject('');
          setMessage('');
        } else {
          setError('Something went wrong.');
        }
      } else {
        setError('Invalid email.');
      }
    } else {
      setError('Please fill all required fields.');
    }
    setSubmitting(false);
  };

  return (
    <>
      <Stack w={400}>
        <Center>
          <Heading size="xl" fontWeight="bold">
            Send me a message!
          </Heading>
        </Center>
        <br />
        {error && (
          <>
            <Center>
              <Text fontSize="md" fontWeight="normal" color="red">
                {error}
              </Text>
            </Center>
            <br />
          </>
        )}

        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="subject" isRequired>
          <FormLabel>Subject</FormLabel>
          <Input value={subject} onChange={(e) => setSubject(e.target.value)} />
        </FormControl>
        <FormControl id="message" isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </FormControl>

        <br />

        <Button
          mt={4}
          style={{ background: '#FBD802' }}
          color="dark"
          type="submit"
          isLoading={isSubmitting}
          loadingText="Sending"
          onClick={handleSubmit}
        >
          Send Message
        </Button>
      </Stack>
    </>
  );
}
