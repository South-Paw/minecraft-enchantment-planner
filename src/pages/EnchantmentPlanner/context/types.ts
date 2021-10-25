import { MinecraftItemType } from '../../../data/types';

export interface PlannerItemEnchantment {
  id: string;
  level: number;
}

export interface PlannerItem {
  id: string;
  name: string;
  type: MinecraftItemType;
  enchantments: PlannerItemEnchantment[];
}
