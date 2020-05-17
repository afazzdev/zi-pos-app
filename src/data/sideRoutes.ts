import { createElement, ReactNode } from 'react';
import { Store, ShoppingCart, Receipt } from '@material-ui/icons';

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
        name: 'cashier-names',
        path: '/dashboard/cashier-names',
      },
      owner: {
        name: 'owner',
        path: '/dashboard/owner',
      },
    },
  },
};
