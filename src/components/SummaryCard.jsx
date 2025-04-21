import styled from 'styled-components';

const SummaryContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 24px;
  background: #F3F4F6; /* Updated to pastel yellow */
  border-radius: 12px;
  color: #000;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 600px; /* Limit width on larger screens */
  margin: 0 auto; /* Center on larger screens */
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 12px 16px;
    max-width: 90%; /* Adjust width for smaller screens */
  }
  @media (max-width: 480px) {
    flex-direction: column; /* Stack elements on mobile */
    text-align: center;
    padding: 10px;
  }
`;

function SummaryCard({ stepsLeft }) {
  return (
    <SummaryContainer>
      <span style={{ fontSize: '32px' }}>😊</span>
      <div style={{ display: 'grid' }}>
        <strong>Great job!</strong>
        <span>{stepsLeft} steps to go!</span>
      </div>
    </SummaryContainer>
  );
}

export default SummaryCard;