export type MinecraftItemType =
  | 'pickaxe'
  | 'shovel'
  | 'axe'
  | 'hoe'
  | 'sword'
  | 'shield'
  | 'helmet'
  | 'chestplate'
  | 'leggings'
  | 'boots'
  | 'elytra'
  | 'bow'
  | 'crossbow'
  | 'fishing-rod'
  | 'trident'
  | 'shears'
  | 'flint-and-steel'
  | 'carrot-on-a-stick'
  | 'warped-fungus-on-a-stick'
  | 'book';

export interface MinecraftEnchantment {
  id: string;
  name: string;
  description: string;
  incompatibleEnchantmentIds: string[];
  maxLevel: number;
  validItems: MinecraftItemType[];
}

export interface MinecraftEnchantableItem {
  type: MinecraftItemType;
  label: string;
}
