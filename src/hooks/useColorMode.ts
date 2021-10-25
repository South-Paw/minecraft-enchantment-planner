import { useColorMode as useChakraColorMode } from '@chakra-ui/react';
import { useCallback } from 'react';

export const useColorMode = () => {
  const { colorMode, setColorMode, toggleColorMode } = useChakraColorMode();

  const mode = useCallback((light: any, dark: any): any => (colorMode === 'dark' ? dark : light), [colorMode]);

  return { mode, colorMode, setColorMode, toggleColorMode };
};
