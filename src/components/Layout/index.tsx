import { Fade, Flex } from '@chakra-ui/react';
import { useColorMode } from '../../hooks/useColorMode';

export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { mode } = useColorMode();

  return (
    <Fade in>
      <Flex h="100vh" w="full" bg={mode('gray.50', 'gray.800')}>
        <Flex flex="1 1 auto" h="100%" direction="column">
          <Flex as="main" flex="1 1 auto" maxW="100vw">
            {children}
          </Flex>
        </Flex>
      </Flex>
    </Fade>
  );
};
