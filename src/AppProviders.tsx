import { IconButton } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { HiMoon, HiSun } from 'react-icons/hi';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Theme } from './components/Theme';
import { useColorMode } from './hooks/useColorMode';

const ToggleColorModeButton: React.FC = () => {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      position="fixed"
      bottom={2}
      right={2}
      aria-label="Toggle color mode"
      colorScheme={mode('blackAlpha', 'yellow')}
      icon={mode(<HiMoon />, <HiSun />)}
      onClick={toggleColorMode}
      size="sm"
    />
  );
};

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Minecraft Enchantment Planner" defaultTitle="Minecraft Enchantment Planner" />

      <Theme>
        <Layout>
          <BrowserRouter>{children}</BrowserRouter>
          <ToggleColorModeButton />
        </Layout>
      </Theme>
    </HelmetProvider>
  );
}
