import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

// Parent container for all rings in the Overview section
const OverviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 16px 0;
  flex-wrap: wrap; /* Allow wrapping for smaller screens */
  @media (max-width: 768px) {
    justify-content: center;
    gap: 24px;
  }
`;

const RingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 180px; /* Increased width for larger ring */
  @media (max-width: 480px) {
    width: 120px; /* Slightly smaller on mobile */
  }
`;

const SVG = styled(motion.svg)`
  transform: rotate(-90deg);
`;

const PercentageText = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 22px; /* Increased font size for larger ring */
  font-weight: bold;
  color: ${props => props.theme.colors.text};
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const LabelText = styled.div`
  font-size: 14px;
  margin-top: 8px;
  text-align: center;
`;

const UnitText = styled.div`
  font-size: 12px;
  color: #666;
  text-align: center;
`;

function ProgressRing({ value, max, label, unit }) {
  const radius = 60; // Increased from 50 to make the ring larger
  const stroke = 10; // Increased from 8 for proportionality
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (value / max) * circumference;
  const percentage = Math.round((value / max) * 100);

  return (
    <RingContainer>
      <SVG
        height={radius * 2}
        width={radius * 2}
        data-tooltip-id={`tooltip-${label}`}
        data-tooltip-content={`${value}/${max} ${unit}`}
        whileHover={{ scale: 1.1 }}
      >
        <circle
          stroke="#E0E0E0"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#4AC8C2" // Updated to teal color from the design
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </SVG>
      <PercentageText>{percentage}%</PercentageText>
      <Tooltip id={`tooltip-${label}`} />
      <LabelText>{label}</LabelText>
      <UnitText>{value} {unit}</UnitText>
    </RingContainer>
  );
}

export const OverviewSection = ({ rings }) => (
  <OverviewContainer>
    {rings.map((ring, index) => (
      <ProgressRing
        key={index}
        value={ring.value}
        max={ring.max}
        label={ring.label}
        unit={ring.unit}
      />
    ))}
  </OverviewContainer>
);

export default OverviewSection;