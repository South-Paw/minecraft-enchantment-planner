import { Fade, Flex } from '@chakra-ui/react';

export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Fade in>
    <Flex h="100vh" w="full" bg="white">
      <Flex flex="1 1 auto" h="100%" direction="column">
        <Flex as="main" flex="1 1 auto" maxW="100vw" overflowY="auto">
          {children}
        </Flex>
      </Flex>
    </Flex>
  </Fade>
);
