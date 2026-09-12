import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Tooltip,
  Badge,
  Typography } from
'@mui/material';
import {
  ShieldIcon,
  LayoutDashboardIcon,
  KeyIcon,
  AlertTriangleIcon,
  SettingsIcon,
  FingerprintIcon } from
'lucide-react';
import { AppPage } from '../types';
interface SidebarProps {
  currentPage: AppPage;
  onNavigate: (page: AppPage) => void;
  criticalAlertsCount: number;
}
export function Sidebar({
  currentPage,
  onNavigate,
  criticalAlertsCount
}: SidebarProps) {
  const menuItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <LayoutDashboardIcon size={22} />
  },
  {
    id: 'vault',
    label: 'My Vault',
    icon: <KeyIcon size={22} />
  },
  {
    id: 'alerts',
    label: 'Breach Alerts',
    icon: <AlertTriangleIcon size={22} />,
    badge: criticalAlertsCount
  },
  {
    id: 'generator',
    label: 'Generator',
    icon: <FingerprintIcon size={22} />
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <SettingsIcon size={22} />
  }] as
  const;
  return (
    <Box
      sx={{
        width: 72,
        flexShrink: 0,
        bgcolor: 'rgba(11, 15, 25, 0.8)',
        backdropFilter: 'blur(10px)',
        borderRight: '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        py: 2,
        zIndex: 10
      }}>
      
      <Box
        sx={{
          mb: 4,
          color: 'primary.main',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          filter: 'drop-shadow(0 0 8px rgba(0, 176, 255, 0.5))'
        }}>
        
        <ShieldIcon size={32} />
      </Box>

      <List
        sx={{
          px: 1,
          flex: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 1
        }}>
        
        {menuItems.map((item) =>
        <ListItem
          key={item.id}
          disablePadding
          sx={{
            display: 'flex',
            justifyContent: 'center'
          }}>
          
            <Tooltip title={item.label} placement="right" arrow>
              <ListItemButton
              selected={currentPage === item.id}
              onClick={() => onNavigate(item.id as AppPage)}
              sx={{
                borderRadius: 2,
                justifyContent: 'center',
                minHeight: 48,
                width: 48,
                px: 0,
                transition: 'all 0.2s',
                position: 'relative',
                '&.Mui-selected': {
                  bgcolor: 'rgba(0, 176, 255, 0.15)',
                  color: 'primary.main',
                  boxShadow: 'inset 0 0 10px rgba(0, 176, 255, 0.1)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: -8,
                    top: '20%',
                    height: '60%',
                    width: 3,
                    bgcolor: 'primary.main',
                    borderRadius: '0 4px 4px 0',
                    boxShadow: '0 0 8px rgba(0, 176, 255, 0.8)'
                  },
                  '& .MuiListItemIcon-root': {
                    color: 'primary.main',
                    filter: 'drop-shadow(0 0 4px rgba(0, 176, 255, 0.4))'
                  }
                },
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.05)'
                }
              }}>
              
                <ListItemIcon
                sx={{
                  minWidth: 'auto',
                  color:
                  currentPage === item.id ?
                  'primary.main' :
                  'text.secondary'
                }}>
                
                  {item.badge ?
                <Badge
                  badgeContent={item.badge}
                  color="error"
                  sx={{
                    '& .MuiBadge-badge': {
                      boxShadow: '0 0 8px rgba(255, 23, 68, 0.6)',
                      right: -2,
                      top: 2
                    }
                  }}>
                  
                      {item.icon}
                    </Badge> :

                item.icon
                }
                </ListItemIcon>
              </ListItemButton>
            </Tooltip>
          </ListItem>
        )}
      </List>

      <Box
        sx={{
          mt: 'auto',
          mb: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1
        }}>
        
        <Box
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            px: 1,
            py: 0.5,
            borderRadius: 1,
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
          
          <Typography
            variant="caption"
            sx={{
              fontWeight: 800,
              color: 'text.secondary',
              fontSize: '0.6rem',
              letterSpacing: '0.1em'
            }}>
            
            FREE
          </Typography>
        </Box>
        <Tooltip title="Upgrade to PRO" placement="right" arrow>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'rgba(0, 176, 255, 0.1)',
              color: '#00b0ff',
              border: '1px solid rgba(0, 176, 255, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.2s',
              '&:hover': {
                bgcolor: 'rgba(0, 176, 255, 0.2)',
                boxShadow: '0 0 15px rgba(0, 176, 255, 0.4)'
              }
            }}>
            
            <Typography
              variant="caption"
              sx={{
                fontWeight: 800
              }}>
              
              PRO
            </Typography>
          </Box>
        </Tooltip>
      </Box>
    </Box>);

}