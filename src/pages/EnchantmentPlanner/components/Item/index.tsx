import { Box, Divider, SlideFade } from '@chakra-ui/react';
import { MinecraftItemType } from '../../../../data/types';
import { PlannerItemEnchantment } from '../../context';
import { ItemEnchantments } from './Enchantments';
import { ItemTitle } from './Title';

export interface ItemProps {
  id: string;
  name: string;
  type: MinecraftItemType;
  enchantments: PlannerItemEnchantment[];
}

export const Item: React.FC<ItemProps> = ({ id }) => (
  <SlideFade key={id} in offsetY="56px">
    <Box borderWidth="1px" rounded="lg">
      <ItemTitle id={id} />
      <Divider />
      <ItemEnchantments id={id} />
    </Box>
  </SlideFade>
);
