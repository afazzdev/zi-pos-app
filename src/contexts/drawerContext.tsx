import React, { useContext } from 'react';
import { createCtx } from './createCtx';

export interface IDrawer {
  transaction: boolean;
  cashier: boolean;
  [key: string]: boolean;
}

const defaultValue = {
  transaction: false,
  cashier: false,
};

const [ctx, DrawerContextProvider] = createCtx<IDrawer>(defaultValue);
export const useDrawerContext = () => {
  const { state, update } = useContext(ctx);
  return [state, update] as const;
};

const DrawerProvider = ({ children }: { children: React.ReactChild }) => {
  return <DrawerContextProvider>{children}</DrawerContextProvider>;
};

export default DrawerProvider;
