import { useContext } from 'react';
import { LineChart as RechartLine, Line, XAxis, YAxis } from 'recharts';
import { ThemeContext } from '../context/ThemeContext';

function MoodTrend({ data }) {
  const { resolvedTheme } = useContext(ThemeContext);
  const primaryColor = resolvedTheme.colors.primary;

  return (
    <div className="card" style={{ height: '100px', width: '100%' }}>
      <h3>Mood Trend</h3>
      <RechartLine width={window.innerWidth < 768 ? 120 : 150} height={60} data={data}>
        <XAxis dataKey="date" hide />
        <YAxis domain={[0, 'dataMax']} hide />
        <Line type="monotone" dataKey="value" stroke={primaryColor} dot={false} />
      </RechartLine>
    </div>
  );
}

export default MoodTrend;