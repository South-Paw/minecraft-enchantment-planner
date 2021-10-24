import { ChakraProvider, ChakraProviderProps, DeepPartial, extendTheme, Theme as ChakraTheme } from '@chakra-ui/react';

const theme: DeepPartial<ChakraTheme> = extendTheme({});

export interface ThemeProps extends ChakraProviderProps {}

export const Theme: React.FC<ThemeProps> = (props) => <ChakraProvider theme={theme} {...props} />;
