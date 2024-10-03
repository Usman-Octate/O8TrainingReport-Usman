import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import styled from "styled-components";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const options = {
  plugins: {
    legend: {
      position: "bottom",
    },
  },
  scales: {
    y: {
      suggestedMin: 0,
      suggestedMax: 1000,
      ticks: {
        stepSize: 200,
        callback: function (value) {
          return value === 0 ||
            value === 200 ||
            value === 400 ||
            value === 600 ||
            value === 800 ||
            value === 1000
            ? value
            : "";
        },
      },
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: "Revenue",
      data: [0, 400, 300, 700, 900, 1000],
      backgroundColor: "#007AFF",
      borderColor: "#2196F3",
    },
    {
      label: "Expenses",
      data: [0, 300, 200, 300, 600, 700],
      backgroundColor: "#F44236",
      borderColor: "#F44236",
    },
    {
      label: "Net Income",
      data: [0, 500, 600, 700, 800, 900],
      backgroundColor: "#4CD964",
      borderColor: "#4CD964",
    },
  ],
};

const ItemsRevenue = () => {
  return <div style={{ height: "10rem" }}>Graph</div>;
};

export default ItemsRevenue;
