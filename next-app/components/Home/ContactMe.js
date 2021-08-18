import {
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Center,
  Heading,
  Icon,
  Text,
  IconButton,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { useStateContext } from '@/utils/provider';
import { SET_PAGE } from '@/utils/actions';
import fetcher from '@/utils/fetcher';

// From: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default function About() {
  const [{ page }, dispatch] = useStateContext();
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
        const { success } = await fetcher({
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
            Let's get in touch!
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
        <br />
        <Center>
          <IconButton
            colorScheme="none"
            aria-label="scroll-to-top"
            w={10}
            h={10}
            icon={<Icon as={FaArrowCircleUp} w={10} h={10} color="white" />}
            onClick={() =>
              dispatch({
                type: SET_PAGE,
                page: 0,
              })
            }
          />
        </Center>
      </Stack>
    </>
  );
}
