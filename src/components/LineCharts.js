import { DataContext } from '../utils/helpers'
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      display: true,
      align: 'center'
    },
    title: {
      display: true,
      text: '7 Days graph',
    },
    title: {
      color: 'rgb(255,255,255)'
    }
  },
};

export let data;

export default function LineCharts() {


  const { chartsData } = React.useContext(DataContext);

  if (!chartsData) return;
  data = {
    labels: chartsData.labels,
    datasets: [
      {
        label: 'Max',
        data: chartsData.max,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(239 68 68)',
        tension: 0.1,
      },
      {
        label: 'Min',
        data: chartsData.min,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgb(59 130 246)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className='mt-10 w-[90%] md:w-[75%] lg:w-[65%] h-fit mx-auto rounded-md p-2 bg-blackBG '>
      <Line data={data} options={options} />
    </div>
  )
}