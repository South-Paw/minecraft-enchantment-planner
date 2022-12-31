import { Button, Center, Fade, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import { useEnchantmentPlanner } from '../../context';
import { Item } from '../Item';

export interface ItemListProps {}

export function ItemList() {
  const { items, addItem } = useEnchantmentPlanner();

  if (items.length === 0) {
    return (
      <Fade key="add-first-item" in>
        <Center>
          <VStack spacing={2}>
            <Text>You have no items.</Text>
            <Button onClick={addItem} colorScheme="purple" size="sm">
              Add Item
            </Button>
          </VStack>
        </Center>
      </Fade>
    );
  }

  return (
    <Fade key="item-list" in>
      <Stack spacing={4}>
        <HStack spacing={2}>
          <Button onClick={addItem} colorScheme="purple" size="sm">
            Add Item
          </Button>
        </HStack>
        <Stack spacing={3}>
          {items.map(({ id, name, type, enchantments }) => (
            <Item key={id} id={id} name={name} type={type} enchantments={enchantments} />
          ))}
        </Stack>
      </Stack>
    </Fade>
  );
}
