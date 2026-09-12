import React from 'react';
import { Box, Typography } from '@mui/material';
import { DatabaseIcon, WifiIcon, ShieldCheckIcon } from 'lucide-react';
export function StatusBar() {
  return (
    <Box
      sx={{
        height: 28,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        bgcolor: '#06090f',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        px: 2,
        zIndex: 20
      }}>
      
      <Box
        sx={{
          display: 'flex',
          gap: 3
        }}>
        
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            color: 'text.secondary'
          }}>
          
          <DatabaseIcon size={12} />
          <Typography
            variant="caption"
            sx={{
              fontSize: '0.65rem'
            }}>
            
            DB Ver: 2024.05.12
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            color: 'success.main'
          }}>
          
          <WifiIcon size={12} />
          <Typography
            variant="caption"
            sx={{
              fontSize: '0.65rem'
            }}>
            
            Connected
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          color: 'text.secondary'
        }}>
        
        <ShieldCheckIcon size={12} color="#00e676" />
        <Typography
          variant="caption"
          sx={{
            fontSize: '0.65rem'
          }}>
          
          Zero-Knowledge Active
        </Typography>
      </Box>
    </Box>);

}