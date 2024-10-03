import { useSelector } from "react-redux";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styled from "styled-components";

const data = [
  { name: "Jan", revenue: 32, expenses: 37, netincome: 60 },
  { name: "Feb", revenue: 42, expenses: 42, netincome: 54 },
  { name: "Mar", revenue: 51, expenses: 41, netincome: 54 },
  { name: "Apr", revenue: 60, expenses: 37, netincome: 28 },
  { name: "May", revenue: 51, expenses: 31, netincome: 27 },
  { name: "Jun", revenue: 95, expenses: 44, netincome: 49 },
  { name: "Jul", revenue: 32, expenses: 37, netincome: 60 },
  { name: "Aug", revenue: 42, expenses: 42, netincome: 54 },
  { name: "Sep", revenue: 51, expenses: 41, netincome: 54 },
  { name: "Oct", revenue: 60, expenses: 37, netincome: 28 },
  { name: "Nov", revenue: 51, expenses: 31, netincome: 27 },
  { name: "Dec", revenue: 95, expenses: 44, netincome: 49 },
];
const Container = styled.div`
  background-color: #ffffff;
  padding: 10px;
  box-shadow: 1px 1.3px 3px 1px #00000033;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const Text = styled.div`
  color: #464f60;
  font-size: 24px;
  font-weight: 700;
  margin: 2rem 0 1rem 0;
`;
const ProfiltLossChart = () => {

  const themeKeys = useSelector((state) => state.localization.themeKeys);

  return (
    <Container>
      <Text>PROFIT AND LOSS SUMMARY</Text>
      <LineChart width={800} height={300} data={data}>
        <Line
          type="monotone"
          dataKey="revenue"
          stroke={themeKeys.c18}
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="expenses"
          stroke={themeKeys.c17}
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="netincome"
          stroke={themeKeys.c16}
          strokeWidth={3}
        />
        <CartesianGrid stroke={themeKeys.c15} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </Container>
  );
};

export default ProfiltLossChart;
