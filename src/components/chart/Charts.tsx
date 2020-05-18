import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Typography } from '@material-ui/core';
import {
  Timeline as LineChartIcon,
  Equalizer as BarChartIcon,
  PieChart as PieChartIcon,
} from '@material-ui/icons';
import { ButtonGroup } from '../button';

const LineChart = ({ time = 'bulan' }: { time: string | number }) => {
  const [chartType, setChartType] = React.useState('LINE');
  const data = {
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
  };

  const options = {
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
  };

  const Chart = () => {
    switch (chartType) {
      case 'PIE':
        return <Pie data={data} options={options} height={150} />;
      case 'BAR':
        return <Bar data={data} options={options} />;
      case 'LINE':
        return <Line data={data} options={options} height={150} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='h5'>Penjualan {time} ini</Typography>
        <ButtonGroup
          data={[
            {
              name: 'LINE',
              child: <LineChartIcon />,
            },
            {
              name: 'PIE',
              child: <PieChartIcon />,
            },
            {
              name: 'BAR',
              child: <BarChartIcon />,
            },
          ]}
          onClick={setChartType}
          isOn={chartType}
        />
      </div>

      <br />
      <Chart />
    </div>
  );
};

export default LineChart;
