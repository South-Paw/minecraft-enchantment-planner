import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Theme } from './components/Theme';

export const AppProviders: React.FC = ({ children }) => (
  <HelmetProvider>
    <Helmet titleTemplate="%s | Minecraft Enchantment Planner" defaultTitle="Minecraft Enchantment Planner" />

    <Theme>
      <Layout>
        <BrowserRouter>{children}</BrowserRouter>
      </Layout>
    </Theme>
  </HelmetProvider>
);
