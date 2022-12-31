import { ChakraProvider, ChakraProviderProps, DeepPartial, extendTheme, Theme as ChakraTheme } from '@chakra-ui/react';

const theme: DeepPartial<ChakraTheme> = extendTheme({});

export function Theme(props: ChakraProviderProps) {
  return <ChakraProvider theme={theme} {...props} />;
}
