import { createElement, ReactNode } from 'react';
import {
  Store,
  ShoppingCart,
  Receipt,
  Dashboard,
  Settings,
} from '@material-ui/icons';

export type ISideRoutesChildren = {
  [key: string]: {
    name: string;
    path: string;
    icon?: ReactNode;
  };
};

export type ISideRoutes = {
  [key: string]: {
    name: string;
    path?: string;
    icon?: ReactNode;
    children?: ISideRoutesChildren;
  };
};

export const sideRoutes: ISideRoutes = {
  dashboard: {
    name: 'dashboard',
    path: '/dashboard',
    icon: createElement(Dashboard),
  },
  transaction: {
    name: 'transaction',
    icon: createElement(Store),
    children: {
      buy: {
        name: 'buy',
        path: '/dashboard/buy',
        icon: createElement(ShoppingCart),
      },
      sell: {
        name: 'sell',
        path: '/dashboard/sell',
        icon: createElement(Receipt),
      },
    },
  },
  cashier: {
    name: 'cashier',
    children: {
      member: {
        name: 'cashierNames',
        path: '/dashboard/cashier-names',
      },
      owner: {
        name: 'owner',
        path: '/dashboard/owner',
      },
    },
  },
  setting: {
    name: 'setting',
    icon: createElement(Settings),
    children: {
      general: {
        name: 'general',
        path: '/dashboard/setting/general',
      },
      profile: {
        name: 'profile',
        path: '/dashboard/setting/profile',
      },
    },
  },
};
