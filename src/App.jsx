import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProgressRing from './components/ProgressRing';
import HourlyStepsChart from './components/LineChart';
import WeeklyStepsChart from './components/BarChart';
import GoalProgress from './components/GoalProgress';
import MoodTracker from './components/MoodTracker';
import MoodTrend from './components/MoodTrend';
import SummaryCard from './components/SummaryCard';
import Settings from './components/Settings';
import { SidebarContext } from './context/SidebarContext';
import data from './assets/data.json';

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.div`
  margin:8px;
  margin-left: ${props => (props.isSidebarHovered ? '200px' : '68px')};
  padding: 0 8px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: ${props => props.theme.colors.innerBackground};
  transition: margin-left 0.3s ease;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  @media (max-width: 768px) {
    margin-left: 74px;
  }
`;

const OverviewSection = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const OverviewLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 300px;
`;

const RingsContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;

const OverviewRight = styled.div`
  flex: 1;
  min-width: 300px;
`;

const ActivitySection = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ActivityLeft = styled.div`
  flex: 1;
  min-width: 300px;
`;

const GoalsMoodSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
  min-width: 300px;
`;

function Dashboard({ appData, error, moodHistory, handleMoodSelect }) {
  if (error) return <div>Error: {error}</div>;
  if (!appData) return <div>Loading...</div>;

  console.log("appData.today.hourlySteps", appData.today.hourlySteps)
  return (
    <>
      <Header />
      <OverviewSection>
        <OverviewLeft>
          <h2>Overview</h2>
          <RingsContainer>
            <ProgressRing
              rings={[
                { value: appData.today.steps, max: appData.today.goals.steps, label: "Steps", unit: "cop" },
                { value: appData.today.calories, max: appData.today.goals.calories, label: "Calories", unit: "kg" },
                { value: appData.today.activeMinutes, max: appData.today.goals.activeMinutes, label: "Active Minutes", unit: "" }
              ]}
            ></ProgressRing>

          </RingsContainer>
          <SummaryCard stepsLeft={appData.today.goals.steps - appData.today.steps} />
        </OverviewLeft>
        <OverviewRight>
          <h2>Activity Details</h2>
          <HourlyStepsChart data={appData.today.hourlySteps} />
        </OverviewRight>
      </OverviewSection>
      <ActivitySection>
        <ActivityLeft>
          <h2>Activity Details</h2>
          <WeeklyStepsChart data={appData.weeklySteps} />
        </ActivityLeft>
        <GoalsMoodSection>
          <GoalProgress
            steps={{ value: appData.today.steps, percentage: (appData.today.steps / appData.today.goals.steps) * 100 }}
            calories={{ value: appData.today.calories, percentage: (appData.today.calories / appData.today.goals.calories) * 100 }}
          />
          <div>
            <MoodTracker onMoodSelect={handleMoodSelect} />
            <MoodTrend data={appData.moodHistory.map(m => ({ date: m.date, value: 1 }))} />
          </div>
        </GoalsMoodSection>
      </ActivitySection>
    </>
  );
}

function App() {
  const [appData, setAppData] = useState(null);
  const [error, setError] = useState(null);
  const [moodHistory, setMoodHistory] = useState([]);

  useEffect(() => {
    try {
      setAppData(data);
    } catch (err) {
      setError('Failed to load data');
      console.error(err);
    }
  }, []);

  const handleMoodSelect = (mood) => {
    const newMood = { date: new Date().toISOString().split('T')[0], value: 1 };
    setMoodHistory([...moodHistory, newMood]);
  };

  return (
    <AppContainer>
      <Sidebar />
      <MainContent>
        <Routes>
          <Route
            path="/"
            element={<Dashboard appData={appData} error={error} moodHistory={moodHistory} handleMoodSelect={handleMoodSelect} />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard appData={appData} error={error} moodHistory={moodHistory} handleMoodSelect={handleMoodSelect} />}
          />
          <Route path="/settings" element={<Settings />} />
          {/* Placeholder routes for future pages */}
          <Route path="/goals" element={<div><Header /><h2>Goals Page</h2></div>} />
          <Route path="/history" element={<div><Header /><h2>History Page</h2></div>} />
        </Routes>
      </MainContent>
    </AppContainer>
  );
}

export default App;