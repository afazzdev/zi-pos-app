import { createElement, ReactNode } from 'react';
import {
  Store,
  ShoppingCart,
  Receipt,
  Dashboard as DashboardIcon,
  Settings,
} from '@material-ui/icons';
import Dashboard from '../pages/dashboard/Dashboard';
import Goods from '../pages/dashboard/Goods';

export type ISideRoutesChildren = {
  [key: string]: {
    name: string;
    path: string;
    icon?: ReactNode;
    render?: ReactNode;
    component?: ReactNode;
  };
};

export type ISideRoutes = {
  [key: string]: {
    name: string;
    path?: string;
    icon?: ReactNode;
    render?: ReactNode;
    component?: ReactNode;
    children?: ISideRoutesChildren;
  };
};

export const sideRoutes: ISideRoutes = {
  dashboard: {
    name: 'dashboard',
    path: '/dashboard/',
    icon: createElement(DashboardIcon),
    component: Dashboard,
  },
  transaction: {
    name: 'transaction',
    icon: createElement(Store),
    children: {
      buy: {
        name: 'buy',
        path: '/dashboard/buy',
        icon: createElement(ShoppingCart),
        render: () => createElement('div', null, 'Buy'),
      },
      sell: {
        name: 'sell',
        path: '/dashboard/sell',
        icon: createElement(Receipt),
        render: () => createElement('div', null, 'Sell'),
      },
    },
  },
  goods: {
    name: 'goods',
    path: '/dashboard/goods',
    component: Goods,
  },
  cashier: {
    name: 'cashier',
    children: {
      member: {
        name: 'cashierNames',
        path: '/dashboard/cashier-names',
        render: () => createElement('div', null, 'cashier'),
      },
      owner: {
        name: 'owner',
        path: '/dashboard/owner',
        render: () => createElement('div', null, 'owner'),
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
        render: () => createElement('div', null, 'General'),
      },
      profile: {
        name: 'profile',
        path: '/dashboard/setting/profile',
        render: () => createElement('div', null, 'Profile'),
      },
    },
  },
};
