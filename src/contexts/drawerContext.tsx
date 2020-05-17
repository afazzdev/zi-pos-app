import React, { useContext, useEffect } from 'react';
import { reduce } from 'lodash';
import { createCtx } from './createCtx';
import { useSideRoutesContext } from './sideRoutes';

export interface IDrawer {
  [key: string]: boolean | undefined;
}

type IDefaultValue = { [key: string]: boolean };

const [ctx, DrawerContextProvider] = createCtx<IDrawer>({});
export const useDrawerContext = () => {
  const [sideRoutes] = useSideRoutesContext();
  const { state, update } = useContext(ctx);

  useEffect(() => {
    const defaultVal = reduce(
      sideRoutes,
      (arr, val) => {
        arr[val.name] = false;
        return arr;
      },
      {} as IDefaultValue
    );

    update(defaultVal as IDefaultValue);
  }, [sideRoutes, update]);

  return [state, update] as const;
};

const DrawerProvider = ({ children }: { children: React.ReactChild }) => {
  return <DrawerContextProvider>{children}</DrawerContextProvider>;
};

export default DrawerProvider;
