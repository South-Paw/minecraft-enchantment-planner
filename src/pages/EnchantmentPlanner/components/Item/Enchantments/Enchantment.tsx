import { Box, Center, Checkbox, Grid, IconButton, SlideFade, Tooltip } from '@chakra-ui/react';
import { useMemo } from 'react';
import { HiX } from 'react-icons/hi';
import { enchantments } from '../../../../../data/enchantments';

export interface EnchantmentProps {
  id: string;
  level: number;
  onDelete: (id: string) => void;
}

// TODO: implement level section
export const Enchantment: React.FC<EnchantmentProps> = ({ id, onDelete }) => {
  const enchantment = useMemo(() => enchantments.find((e) => e.id === id), [id]);

  if (!enchantment) {
    return null;
  }

  return (
    <SlideFade key={id} in offsetY="16px">
      <Grid gap={3} templateColumns="40px 1fr 32px" alignItems="center">
        <Center>
          <Checkbox colorScheme="green" size="lg" />
        </Center>

        <Tooltip label={enchantment.description} placement="bottom-start">
          <Box>{enchantment.name}</Box>
        </Tooltip>

        <Tooltip label="Delete Enchantment" placement="left">
          <IconButton
            onClick={() => onDelete(id)}
            icon={<HiX />}
            aria-label="Delete Enchantment"
            variant="ghost"
            colorScheme="red"
            size="sm"
          />
        </Tooltip>
      </Grid>
    </SlideFade>
  );
};
