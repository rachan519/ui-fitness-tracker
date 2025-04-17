import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MoodContainer = styled.div`
  display: flex;
  justify-content: center; /* Center the emojis */
  gap: 16px; /* Increased gap for better spacing */
  padding: 8px 0;
`;

const MoodButton = styled(motion.button)`
  background: transparent;
  font-size: 24px;
  border: ${props => (props.isSelected ? `2px solid ${props.theme.colors.primary}` : 'none')};
  border-radius: 50%;
  padding: 4px;
  cursor: pointer;
`;

function MoodTracker({ onMoodSelect }) {
  const [mood, setMood] = useState(null);
  const moods = ['😊', '😊', '😊', '😊'];

  return (
    <div className="card" style={{ height: '120px', marginBottom: '18px' }}>
      <h3>Mood Tracker</h3>
      <MoodContainer>
        {moods.map((m, index) => (
          <MoodButton
            key={index}
            isSelected={mood === m}
            whileHover={{ scale: 1.2 }}
            onClick={() => {
              setMood(m);
              onMoodSelect(m);
            }}
          >
            {m}
          </MoodButton>
        ))}
      </MoodContainer>
    </div>
  );
}

export default MoodTracker;