import React, { useContext } from 'react';
import { createCtx } from './createCtx';
import { sideRoutes, ISideRoutes } from '../data/sideRoutes';

const [ctx, SideRoutesContextProvider] = createCtx<ISideRoutes>(sideRoutes);
export const useSideRoutesContext = () => {
  const { state, update } = useContext(ctx);
  return [state, update] as const;
};

const SideRoutesProvider = ({ children }: { children: React.ReactChild }) => {
  return <SideRoutesContextProvider>{children}</SideRoutesContextProvider>;
};

export default SideRoutesProvider;
