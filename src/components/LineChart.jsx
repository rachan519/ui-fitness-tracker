import { useContext } from 'react';
import { LineChart as RechartLine, Line, XAxis, YAxis, Area } from 'recharts';
import { ThemeContext } from '../context/ThemeContext';

function HourlyStepsChart({ data }) {
  const { resolvedTheme } = useContext(ThemeContext);
  const primaryColor = resolvedTheme.colors.primary;

  const r = parseInt(primaryColor.slice(1, 3), 16);
  const g = parseInt(primaryColor.slice(3, 5), 16);
  const b = parseInt(primaryColor.slice(5, 7), 16);
  const fillColor = `rgba(${r},${g},${b},0.2)`;

  return (
    <div className="card" style={{ height: '200px', width: '100%' }}>
      <h3>Steps</h3>
      <RechartLine width={window.innerWidth < 768 ? 250 : 300} height={120} data={data}>
        <XAxis dataKey="time" />
        <YAxis domain={[0, 'dataMax']} hide />
        <Area type="monotone" dataKey="steps" stroke={primaryColor} fill={fillColor} />
        <Line type="monotone" dataKey="steps" stroke={primaryColor} dot={false} />
      </RechartLine>
    </div>
  );
}

export default HourlyStepsChart;