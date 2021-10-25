import { createContext, useCallback, useContext, useReducer } from 'react';
import { EnchantmentPlannerAction, initialState, reducer } from './reducer';
import { PlannerItem } from './types';

interface EnchantmentPlannerContextProps {
  readonly items: PlannerItem[];
  addItem: () => void;
  updateItem: (id: string, item: Partial<PlannerItem>) => void;
  deleteItem: (id: string) => void;
}

const EnchantmentPlannerContext = createContext<EnchantmentPlannerContextProps | undefined>(undefined);

export const EnchantmentPlannerProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = useCallback(() => dispatch({ type: EnchantmentPlannerAction.ADD }), []);

  const updateItem = useCallback(
    (id: string, item: Partial<PlannerItem>) => dispatch({ type: EnchantmentPlannerAction.UPDATE, id, item }),
    [],
  );

  const deleteItem = useCallback((id: string) => dispatch({ type: EnchantmentPlannerAction.DELETE, id }), []);

  return (
    <EnchantmentPlannerContext.Provider
      value={{
        items: state,
        addItem,
        updateItem,
        deleteItem,
      }}
      {...props}
    />
  );
};

export const useEnchantmentPlanner = () => {
  const context = useContext(EnchantmentPlannerContext);

  if (!context) {
    throw new Error('useEnchantmentPlanner must be called within a EnchantmentPlannerProvider');
  }

  return context;
};
