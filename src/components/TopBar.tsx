import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { MinusIcon, SquareIcon, XIcon, ShieldIcon } from 'lucide-react';
interface TopBarProps {
  onLock: () => void;
}
export function TopBar({ onLock }: TopBarProps) {
  return (
    <Box
      sx={{
        height: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        bgcolor: '#06090f',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        WebkitAppRegion: 'drag',
        userSelect: 'none',
        zIndex: 20
      }}>
      
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          pl: 2
        }}>
        
        <ShieldIcon size={14} color="#00b0ff" />
        <Typography
          variant="caption"
          sx={{
            fontWeight: 600,
            color: 'text.secondary',
            letterSpacing: '0.05em'
          }}>
          
          VAULTGUARD PRO
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          height: '100%',
          WebkitAppRegion: 'no-drag'
        }}>
        
        <IconButton
          size="small"
          sx={{
            borderRadius: 0,
            width: 40,
            color: 'text.secondary',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.1)'
            }
          }}>
          
          <MinusIcon size={14} />
        </IconButton>
        <IconButton
          size="small"
          sx={{
            borderRadius: 0,
            width: 40,
            color: 'text.secondary',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.1)'
            }
          }}>
          
          <SquareIcon size={12} />
        </IconButton>
        <IconButton
          size="small"
          onClick={onLock}
          sx={{
            borderRadius: 0,
            width: 40,
            color: 'text.secondary',
            '&:hover': {
              bgcolor: '#e81123',
              color: 'white'
            } // Windows close button red
          }}>
          
          <XIcon size={16} />
        </IconButton>
      </Box>
    </Box>);

}