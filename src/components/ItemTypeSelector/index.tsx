import { Flex, Menu, MenuButton, MenuItem, MenuList, MenuProps } from '@chakra-ui/react';
import { items } from '../../data/items';
import { MinecraftItemType } from '../../data/types';
import { useColorMode } from '../../hooks/useColorMode';
import { ItemSprite } from '../ItemSprite';

export interface ItemTypeSelectorProps extends MenuProps {
  selected: MinecraftItemType;
  onSelect: (type: MinecraftItemType) => void;
}

export const ItemTypeSelector: React.FC<ItemTypeSelectorProps> = ({ children, selected, onSelect, ...rest }) => {
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
        {items.map(({ type, label }) => (
          <MenuItem key={type} onClick={() => onSelect(type)} data-active={type === selected ? 'true' : undefined}>
            <Flex mr={2} boxSize={8} align="center" justify="center">
              <ItemSprite id={type} transformOrigin="center" transform="scale(2)" />
            </Flex>
            <span>{label}</span>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
