import { useState, useContext } from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 16px 24px;
  // background: ${props => props.theme.colors.card};
  // border-radius: 16px;
  // box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-bottom: 24px;
  height: 60px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
    height: auto;
  }
`;

const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${props => props.theme.colors.text};
  cursor: pointer;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 60px;
  right: 24px;
  background: ${props => props.theme.colors.card};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  padding: 16px;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  @media (max-width: 768px) {
    top: 100px;
    right: 16px;
  }
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

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <HeaderContainer>
      <h1 style={{ fontSize: '24px' }}>Fitness Tracker</h1>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <UserAvatar onClick={() => setIsDropdownOpen(!isDropdownOpen)} />
        <span>{format(new Date(), 'MMMM d, yyyy')}</span>
        <Dropdown isOpen={isDropdownOpen}>
          <h4>Theme</h4>
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
        </Dropdown>
      </div>
    </HeaderContainer>
  );
}

export default Header;