import { Heading } from '@chakra-ui/react';
import AppContainer from '@/components/AppContainer';

function Error({ statusCode, err }) {
  console.log(err.message);
  return (
    <AppContainer customMeta={{ title: 'Error' }}>
      <Heading size="xl" fontWeight="normal" color="white">
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </Heading>
    </AppContainer>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode, err };
};

export default Error;
