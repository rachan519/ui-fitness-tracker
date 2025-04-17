import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';

const SettingsContainer = styled.div`
  padding: 24px;
  flex: 1;
`;

const ThemeToggleContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;

const ThemeButton = styled.button`
  background: ${props => props.active ? props.theme.colors.accent : 'transparent'};
  color: ${props => props.active ? 'white' : props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.text};
  padding: 8px 16px;
  border-radius: 8px;
`;

function Settings() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <SettingsContainer>
      <h2>Settings</h2>
      <h3>Theme</h3>
      <ThemeToggleContainer>
        <ThemeButton active={theme === 'light'} onClick={() => toggleTheme('light')}>
          Light
        </ThemeButton>
        <ThemeButton active={theme === 'dark'} onClick={() => toggleTheme('dark')}>
          Dark
        </ThemeButton>
        <ThemeButton active={theme === 'system'} onClick={() => toggleTheme('system')}>
          System
        </ThemeButton>
      </ThemeToggleContainer>
    </SettingsContainer>
  );
}

export default Settings;