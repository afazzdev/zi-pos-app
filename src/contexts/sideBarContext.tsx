import React, { useContext, useEffect } from 'react';
import { createCtx } from '../utils/createCtx';
import { useSideRoutesContext } from './sideRoutesContext';

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
    // check if the last opened link is /dashboard or not
    // if /dashboard  then return else so the hidden list will hidden
    if (sidebar && !JSON.parse(sidebar || '').dashboard) {
      defaultVal = JSON.parse(sidebar || '');
    } else {
      // DO NOT REMOVE THIS LINE. if you remove this line then undefined error will occur
      defaultVal = Object.values(sideRoutes).reduce<IDefaultValue>(
        (arr, val) => {
          arr[val.name] = false;
          return arr;
        },
        {}
      );
    }

    update(defaultVal as IDefaultValue);
  }, [sideRoutes, update]);

  useEffect(() => {
    // save every change to localStorage for persisting the value
    localStorage.setItem('sidebar', JSON.stringify(state));
  }, [state]);

  return [state, update] as const;
};

const SideBarProvider = ({ children }: { children: React.ReactChild }) => {
  return <SideBarContextProvider>{children}</SideBarContextProvider>;
};

export default SideBarProvider;
