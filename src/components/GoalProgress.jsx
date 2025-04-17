import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ProgressBar = styled.div`
  height: 8px;
  background: #E0E0E0;
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: ${props => props.color === 'primary' ? props.theme.colors.primary : props.theme.colors.accent};
  border-radius: 4px;
`;

function GoalProgress({ steps, calories }) {
  return (
    <div className="card" style={{ height: '150px', width: '100%' }}>
      <h3>Goals</h3>
      <ProgressContainer>
        <div>
          <span>{steps.value}/{steps.max} steps</span>
          <ProgressBar>
            <ProgressFill
              color="primary"
              initial={{ width: 0 }}
              animate={{ width: `${steps.percentage}%` }}
              transition={{ duration: 1 }}
            />
          </ProgressBar>
        </div>
        <div>
          <span>{calories.value}/{calories.max} active burn</span>
          <ProgressBar>
            <ProgressFill
              color="accent"
              initial={{ width: 0 }}
              animate={{ width: `${calories.percentage}%` }}
              transition={{ duration: 1 }}
            />
          </ProgressBar>
        </div>
      </ProgressContainer>
    </div>
  );
}

export default GoalProgress;