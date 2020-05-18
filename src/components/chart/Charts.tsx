import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Typography } from '@material-ui/core';
import {
  Timeline as LineChartIcon,
  Equalizer as BarChartIcon,
  PieChart as PieChartIcon,
} from '@material-ui/icons';
import { ButtonGroup } from '../button';

const LineChart = ({
  title,
  data,
  options,
}: {
  title?: string;
  data?: any;
  options?: any;
}) => {
  const [chartType, setChartType] = React.useState('LINE');

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
        <Typography variant='h5'>{title}</Typography>
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
