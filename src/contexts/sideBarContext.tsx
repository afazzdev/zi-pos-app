import React, { useContext, useEffect } from 'react';
import { reduce } from 'lodash';
import { createCtx } from './createCtx';
import { useSideRoutesContext } from './sideRoutes';

export interface ISideBar {
  [key: string]: boolean | undefined;
}

type IDefaultValue = { [key: string]: boolean };

const sidebar = localStorage.getItem('sidebar');

const [ctx, SideBarContextProvider] = createCtx<ISideBar>({});
export const useSideBarContext = () => {
  const [sideRoutes] = useSideRoutesContext();
  const { state, update } = useContext(ctx);

  useEffect(() => {
    let defaultVal;
    if (sidebar) {
      defaultVal = JSON.parse(sidebar || '');
    } else {
      defaultVal = reduce(
        sideRoutes,
        (arr, val) => {
          arr[val.name] = false;
          return arr;
        },
        {} as IDefaultValue
      );
    }

    update(defaultVal as IDefaultValue);
  }, [sideRoutes, update]);

  useEffect(() => {
    localStorage.setItem('sidebar', JSON.stringify(state));
  }, [state]);

  return [state, update] as const;
};

const SideBarProvider = ({ children }: { children: React.ReactChild }) => {
  return <SideBarContextProvider>{children}</SideBarContextProvider>;
};

export default SideBarProvider;
