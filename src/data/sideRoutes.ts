export type ISideRoutesChildren = {
  [key: string]: {
    name: string;
    path: string;
  };
};

export type ISideRoutes = {
  [key: string]: {
    name: string;
    children?: ISideRoutesChildren;
  };
};

export const sideRoutes: ISideRoutes = {
  transaction: {
    name: 'transaction',
    children: {
      buy: {
        name: 'buy',
        path: '/dashboard/buy',
      },
      sell: {
        name: 'sell',
        path: '/dashboard/sell',
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
