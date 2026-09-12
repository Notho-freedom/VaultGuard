import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { darkTheme } from './theme';
import { AppPage } from './types';
import { useMockData } from './hooks/useMockData';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { StatusBar } from './components/StatusBar';
import { ProPopup } from './components/ProPopup';
import { UnlockPage } from './pages/UnlockPage';
import { Dashboard } from './pages/Dashboard';
import { Vault } from './pages/Vault';
import { Alerts } from './pages/Alerts';
import { Generator } from './pages/Generator';
import { Settings } from './pages/Settings';
export function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [currentPage, setCurrentPage] = useState<AppPage>('dashboard');
  const [showProPopup, setShowProPopup] = useState(false);
  const { vault, alerts, healthScore, resolveAlert } = useMockData();
  const handleNavigate = (page: AppPage) => {
    setCurrentPage(page);
  };
  const handleLock = () => {
    setIsUnlocked(false);
    setCurrentPage('dashboard');
  };
  const handleUnlock = () => {
    setIsUnlocked(true);
    setTimeout(() => setShowProPopup(true), 2000);
  };
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return (
          <Dashboard
            healthScore={healthScore}
            alerts={alerts}
            onNavigate={handleNavigate} />);


      case 'vault':
        return <Vault entries={vault} />;
      case 'alerts':
        return <Alerts alerts={alerts} vault={vault} onResolve={resolveAlert} />;
      case 'generator':
        return <Generator />;
      case 'settings':
        return <Settings />;
      default:
        return (
          <Dashboard
            healthScore={healthScore}
            alerts={alerts}
            onNavigate={handleNavigate} />);


    }
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          overflow: 'hidden',
          bgcolor: 'background.default'
        }}>
        
        <TopBar onLock={handleLock} />

        <Box
          sx={{
            flex: 1,
            display: 'flex',
            overflow: 'hidden',
            position: 'relative'
          }}>
          
          {!isUnlocked ?
          <UnlockPage onUnlock={handleUnlock} /> :

          <>
              <Sidebar
              currentPage={currentPage}
              onNavigate={handleNavigate}
              criticalAlertsCount={
              alerts.filter(
                (a) => !a.isActioned && a.severity === 'critical'
              ).length
              } />
            
              <Box
              sx={{
                flex: 1,
                overflowY: 'auto',
                position: 'relative',
                zIndex: 1
              }}>
              
                {renderPage()}
              </Box>
            </>
          }
        </Box>

        <StatusBar />
      </Box>

      <ProPopup open={showProPopup} onClose={() => setShowProPopup(false)} />
    </ThemeProvider>);

}