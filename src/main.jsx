import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import GlobalStyles from './styles/GlobalStyles.js';
import { ThemeProvider } from 'styled-components';
import { ThemeProviderWrapper, ThemeContext } from './context/ThemeContext';
import { SidebarProvider } from './context/SidebarContext'; // Import SidebarProvider

const AppWithTheme = () => {
  const { resolvedTheme } = React.useContext(ThemeContext);

  return (
    <ThemeProvider theme={resolvedTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProviderWrapper>
        <SidebarProvider>
          <AppWithTheme />
        </SidebarProvider>
      </ThemeProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>
);