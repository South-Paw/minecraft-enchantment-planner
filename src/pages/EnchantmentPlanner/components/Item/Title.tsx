import { Box, Flex, Grid, IconButton, Input, Text, Tooltip, useDisclosure } from '@chakra-ui/react';
import React, { useCallback } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import { ItemSprite } from '../../../../components/ItemSprite';
import { ItemTypeSelector } from '../../../../components/ItemTypeSelector';
import { useColorMode } from '../../../../hooks/useColorMode';
import { useEnchantmentPlannerItem } from './hook';

export interface ItemTitleProps {
  id: string;
}

export function ItemTitle({ id }: ItemTitleProps) {
  const { mode } = useColorMode();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    item: {
      name,
      type: { type, label },
    },
    onChangeType,
    onRename,
    onDelete,
  } = useEnchantmentPlannerItem(id);

  const onChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((e) => onRename(e.target.value), [onRename]);

  return (
    <Grid p={2} gap={3} templateColumns="40px 1fr 32px">
      <ItemTypeSelector isOpen={isOpen} onOpen={onOpen} onClose={onClose} selected={type} onSelect={onChangeType}>
        <Flex mr={2} boxSize={10} align="center" justify="center">
          <ItemSprite id={type} transformOrigin="center" transform="scale(2)" />
        </Flex>
      </ItemTypeSelector>

      <Box>
        <Input
          placeholder="Name your item..."
          value={name}
          onChange={onChange}
          variant="unstyled"
          rounded="none"
          _hover={{ bgColor: mode('gray.100', 'gray.900') }}
          _focus={{ boxShadow: 'outline' }}
        />

        <Text color={mode('gray.600', 'gray.400')} fontSize="sm" lineHeight={4}>
          {label}
        </Text>
      </Box>

      <Tooltip label="Delete Item" placement="left">
        <IconButton
          onClick={onDelete}
          icon={<HiOutlineTrash />}
          aria-label="Delete Item"
          variant="ghost"
          colorScheme="red"
          size="sm"
        />
      </Tooltip>
    </Grid>
  );
}
