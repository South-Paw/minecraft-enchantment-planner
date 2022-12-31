import { Menu, MenuButton, MenuItem, MenuList, MenuProps } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { MinecraftEnchantment } from '../../../../../data/types';
import { useColorMode } from '../../../../../hooks/useColorMode';

export interface ItemEnchantmentSelectorProps extends Omit<MenuProps, 'children'> {
  children?: ReactNode;
  options: MinecraftEnchantment[];
  onSelect: (id: string, level: number) => void;
}

export function ItemEnchantmentSelector({ children, options, onSelect, ...rest }: ItemEnchantmentSelectorProps) {
  const { mode } = useColorMode();

  return (
    <Menu {...rest}>
      <MenuButton
        rounded="md"
        outline="none"
        _hover={{ bgColor: mode('gray.100', 'gray.900') }}
        _focus={{ boxShadow: 'outline' }}
      >
        {children}
      </MenuButton>
      <MenuList maxH="320px" overflowX="auto">
        {options.map(({ id, name, maxLevel }) => (
          <MenuItem key={id} onClick={() => onSelect(id, maxLevel)}>
            {name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
