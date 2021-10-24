import { CircularProgress, CircularProgressProps, Fade, Flex } from '@chakra-ui/react';

export interface FullPageLoadingProps extends CircularProgressProps {}

export const FullPageLoading: React.FC<FullPageLoadingProps> = (props) => (
  <Fade in>
    <Flex h="100vh" w="full" align="center" justify="center" bgColor="gray.50">
      <Flex px={4}>
        <CircularProgress isIndeterminate {...props} />
      </Flex>
    </Flex>
  </Fade>
);
