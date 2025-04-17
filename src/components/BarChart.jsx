import { useContext } from 'react';
import { BarChart as RechartBar, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { ThemeContext } from '../context/ThemeContext';
import styled from 'styled-components';

const ChartContainer = styled.div`
  height: 200px;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
`;

function WeeklyStepsChart({ data }) {
  const { resolvedTheme } = useContext(ThemeContext);
  const primaryColor = resolvedTheme.colors.primary;

  // Responsive width calculation
  const chartWidth = window.innerWidth < 768 ? window.innerWidth - 40 : 400;

  return (
    <ChartContainer className="card">
      <h3>Steps</h3>
      <RechartBar width={chartWidth} height={120} data={data}>
        <XAxis dataKey="day" />
        <YAxis domain={[0, 'dataMax']} />
        <Tooltip />
        <Bar dataKey="steps" fill={primaryColor} />
      </RechartBar>
    </ChartContainer>
  );
}

export default WeeklyStepsChart;