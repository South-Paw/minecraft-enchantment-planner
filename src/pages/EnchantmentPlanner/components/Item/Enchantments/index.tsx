import { Box, Button, Stack } from '@chakra-ui/react';
import { useMemo } from 'react';
import { HiPlus } from 'react-icons/hi';
import { enchantments as minecraftEnchantments } from '../../../../../data/enchantments';
import { useEnchantmentPlannerItem } from '../hook';
import { Enchantment } from './Enchantment';
import { ItemEnchantmentSelector } from './Selector';

export interface ItemEnchantmentsProps {
  id: string;
}

export const ItemEnchantments: React.FC<ItemEnchantmentsProps> = ({ id }) => {
  const {
    item: {
      type: { type },
      enchantments,
    },
    addEnchantment,
    deleteEnchantment,
  } = useEnchantmentPlannerItem(id);

  const enchantmentOptions = useMemo(
    () =>
      minecraftEnchantments.filter(
        (enchantment) =>
          // valid enchantments support this item type
          enchantment.validItems.includes(type) &&
          // selected enchantments cannot be selected again OR incompatible
          !enchantments.find((e) => e.id === enchantment.id || enchantment.incompatibleEnchantmentIds.includes(e.id)),
      ),
    [enchantments, type],
  );

  return (
    <Stack p={2} spacing={3}>
      {enchantments.map((e) => (
        <Enchantment key={e.id} id={e.id} level={e.level} onDelete={deleteEnchantment} />
      ))}
      {enchantmentOptions.length > 0 && (
        <Box w={8}>
          <ItemEnchantmentSelector options={enchantmentOptions} onSelect={addEnchantment}>
            <Button as="div" leftIcon={<HiPlus />} size="sm">
              Add Enchantment
            </Button>
          </ItemEnchantmentSelector>
        </Box>
      )}
    </Stack>
  );
};
