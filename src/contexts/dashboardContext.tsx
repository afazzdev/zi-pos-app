import React, { useContext } from 'react';
import { createCtx } from '../utils/createCtx';

const initialValue = {
  charts: {
    data: {
      labels: [
        'jan',
        'feb',
        'mar',
        'apr',
        'may',
        'jun',
        'jul',
        'aug',
        'sep',
        'oct',
        'nov',
        'des',
      ],
      datasets: [
        {
          label: 'label',
          data: [9, 4, 3, 4, 5, 4, 7],
          // borderColor: ['rgba(144, 0, 144, 0.5)'],
          // backgroundColor: ['rgba(144, 0, 144, 0.5)'],
          // pointBackgroundColor: ['rgba(144, 0, 144, 0.5)'],
          // pointBorderColor: ['rgba(144, 0, 144, 0.5)'],
        },
      ],
    },
    options: {
      // title: {
      //   display: true,
      //   text: 'Penjualan bulan ini',
      // },
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0,
              stepSize: 2,
            },
          },
        ],
      },
      maintainAspectRatio: false,
    },
  },
};

const [ctx, DashboardContextProvider] = createCtx<any>(initialValue);
export const useDashboardContext = () => {
  const { state, update } = useContext(ctx);
  return [state, update] as const;
};

const DashboardProvider = ({ children }: { children: React.ReactChild }) => {
  return <DashboardContextProvider>{children}</DashboardContextProvider>;
};

export default DashboardProvider;
