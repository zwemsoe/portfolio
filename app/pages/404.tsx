import { Heading } from '@chakra-ui/react';
import { AppContainer } from '@/modules/shared/components';

export default function Custom404() {
  return (
    <AppContainer customMeta={{ title: '404' }}>
      <Heading size="xl" fontWeight="normal" color="white">
        404 - Page Not Found.
      </Heading>
    </AppContainer>
  );
}
