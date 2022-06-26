import { Heading } from '@chakra-ui/react';
import { NextApiResponse } from 'next';
import { AppContainer } from '@/modules/shared/components';

function Error({ statusCode }: { statusCode: number }) {
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

Error.getInitialProps = ({ res, err }: { res: NextApiResponse; err: any }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
