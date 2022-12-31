/* eslint-disable no-case-declarations */

import { v4 as uuid } from 'uuid';
import { PlannerItem } from './types';

export type State = PlannerItem[];

export const initialState: State = [];

export enum EnchantmentPlannerAction {
  ADD = 'add',
  UPDATE = 'update',
  DELETE = 'delete',
}

type Action =
  | { type: EnchantmentPlannerAction.ADD }
  | { type: EnchantmentPlannerAction.UPDATE; id: string; item: Partial<PlannerItem> }
  | { type: EnchantmentPlannerAction.DELETE; id: string };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case EnchantmentPlannerAction.ADD:
      return [
        ...state,
        {
          id: uuid(),
          name: '',
          type: 'pickaxe',
          enchantments: [],
        },
      ];
    case EnchantmentPlannerAction.UPDATE:
      const index = state.findIndex((item) => item.id === action.id);

      const items = [...state];
      items[index] = { ...state[index], ...action.item };

      return items;
    case EnchantmentPlannerAction.DELETE:
      return [...state].filter((item) => item.id !== action.id);
    default:
      throw new Error(`unknown reducer action`);
  }
}
