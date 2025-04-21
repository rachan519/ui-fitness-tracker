import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { SidebarContext } from '../context/SidebarContext';
import logo from '../assets/purple-logo.png';

const SidebarContainer = styled.div`
  width: ${props => (props.isHovered ? '180px' : '60px')};
  background-color: ${props => props.theme.colors.background};
  height: 100vh;
  position: fixed;
  padding: 6px;
  display: flex;
  flex-direction: column; 
  gap: 16px;
  align-items: ${props => (props.isHovered ? 'flex-start' : 'center')};
  transition: width 0.3s ease;
  overflow: hidden;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.isHovered ? 'flex-start' : 'center')};
  width: 100%;
  // margin-bottom: 16px;
`;

const Logo = styled.img`
  width: 50px;
  height: 60px;
  transition: transform 0.3s ease;
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${props => props.theme.colors.text};
  font-size: 24px;
  text-decoration: none;
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  background-color: ${props => (props.isActive ? `${props.theme.colors.accent}20` : 'transparent')};
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};

  &:hover {
    color: ${props => props.theme.colors.accent};
    background-color: ${props => `${props.theme.colors.accent}20`};
  }
`;

const Icon = styled.span`
  font-size: 24px;
  width: 24px;
  text-align: center;
`;

const Title = styled.span`
  font-size: 16px;
  white-space: nowrap;
  opacity: ${props => (props.isHovered ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

function Sidebar() {
  const location = useLocation();
  const { isSidebarHovered, setIsSidebarHovered } = useContext(SidebarContext);

  const navItems = [
    // { path: '/', icon: '🏋️‍♀️', title: 'Fitrack' },
    { path: '/', icon: '🏠', title: 'Dashboard' },
    { path: '/goals', icon: '🚩', title: 'Goals' },
    { path: '/history', icon: '⏰', title: 'History' },
    { path: '/settings', icon: '⚙️', title: 'Settings' },
  ];

  return (
    <SidebarContainer
      isHovered={isSidebarHovered}
      onMouseEnter={() => setIsSidebarHovered(true)}
      onMouseLeave={() => setIsSidebarHovered(false)}
    >
      <LogoContainer isHovered={isSidebarHovered}>
        <Logo
          src={isSidebarHovered ? logo : logo}
          alt="Fit Pulse"
          isHovered={isSidebarHovered}
        />
      </LogoContainer>
      {navItems.map(item => (
        <NavItem
          key={item.path}
          to={item.path}
          isActive={location.pathname === item.path && item.path}
        >
          <Icon>{item.icon}</Icon>
          <Title isHovered={isSidebarHovered}>{item.title}</Title>
        </NavItem>
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;