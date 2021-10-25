import { useCallback, useMemo } from 'react';
import { items as minecraftItems } from '../../../../data/items';
import { MinecraftEnchantableItem, MinecraftItemType } from '../../../../data/types';
import { useEnchantmentPlanner } from '../../context';

export const useEnchantmentPlannerItem = (id: string) => {
  const { items, updateItem, deleteItem } = useEnchantmentPlanner();

  const { name, type, enchantments } = useMemo(() => items.filter((i) => i.id === id)[0], [id, items]);

  const itemType: MinecraftEnchantableItem = useMemo(
    () => minecraftItems.find((i) => i.type === type) ?? { type: 'book', label: '🤔' },
    [type],
  );

  const onChangeType = useCallback(
    (newType: MinecraftItemType) => updateItem(id, { type: newType, enchantments: [] }),
    [id, updateItem],
  );

  const onRename = useCallback((newName: string) => updateItem(id, { name: newName }), [id, updateItem]);

  const onDelete = useCallback(() => deleteItem(id), [deleteItem, id]);

  const addEnchantment = useCallback(
    (enchantmentId: string, level: number) =>
      updateItem(id, { enchantments: [...enchantments, { id: enchantmentId, level }] }),
    [id, enchantments, updateItem],
  );

  const updateEnchantment = useCallback(
    (enchantmentId: string, level: number) => {
      const index = enchantments.findIndex((e) => e.id === enchantmentId);

      const newEnchantments = [...enchantments];
      newEnchantments[index] = { id: enchantmentId, level };

      updateItem(id, { enchantments: newEnchantments });
    },
    [enchantments, id, updateItem],
  );

  const deleteEnchantment = useCallback(
    (enchantmentId: string) => {
      const index = enchantments.findIndex((e) => e.id === enchantmentId);

      updateItem(id, { enchantments: [...enchantments].filter((_, i) => i !== index) });
    },
    [enchantments, id, updateItem],
  );

  return {
    item: {
      id,
      name,
      type: itemType,
      enchantments,
    },
    onChangeType,
    onRename,
    onDelete,
    addEnchantment,
    updateEnchantment,
    deleteEnchantment,
  };
};
