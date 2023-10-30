import { Line } from 'react-chartjs-2';
import { Chart, LineController, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
Chart.register(LineController, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Bitcoin Price',
      data: [10000, 12000, 11000, 13000, 14000, 12000, 15000],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

const Home = () => {
  return (
    <div>
      <h1>Bitcoin Price Chart</h1>
      <Line data={data} />
    </div>
  );
};

export default Home;
