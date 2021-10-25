import { Container } from '@chakra-ui/react';
import { ItemList } from './components/ItemList';
import { EnchantmentPlannerProvider } from './context';

const EnchantmentPlanner: React.FC = () => (
  <EnchantmentPlannerProvider>
    <Container p={6} maxW="container.sm">
      <ItemList />
    </Container>
  </EnchantmentPlannerProvider>
);

export default EnchantmentPlanner;
