import React from 'react';
import { Box, Typography, Button, IconButton, Stack } from '@mui/material';
import { ZapIcon, XIcon, ClockIcon } from 'lucide-react';
interface ProBannerProps {
  onDismiss: () => void;
}
export function ProBanner({ onDismiss }: ProBannerProps) {
  return (
    <Box
      sx={{
        background:
        'linear-gradient(135deg, rgba(0,176,255,0.12) 0%, rgba(124,77,255,0.12) 50%, rgba(255,23,68,0.08) 100%)',
        border: '1px solid rgba(0,176,255,0.2)',
        borderRadius: 2,
        p: 2,
        px: 3,
        mb: 3,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        position: 'relative',
        overflow: 'hidden'
      }}>
      
      {/* Decorative glow */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 80,
          height: 80,
          background:
          'radial-gradient(circle, rgba(0,176,255,0.3) 0%, transparent 70%)',
          filter: 'blur(15px)',
          zIndex: 0
        }} />
      

      <Box
        sx={{
          p: 1.5,
          bgcolor: 'rgba(255, 215, 64, 0.1)',
          borderRadius: '50%',
          border: '1px solid rgba(255, 215, 64, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          zIndex: 1
        }}>
        
        <ZapIcon
          size={22}
          color="#ffd740"
          style={{
            filter: 'drop-shadow(0 0 6px rgba(255,215,64,0.5))'
          }} />
        
      </Box>

      <Box
        sx={{
          flex: 1,
          zIndex: 1
        }}>
        
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 800,
            letterSpacing: '0.05em',
            color: 'white'
          }}>
          
          UPGRADE TO VAULTGUARD PRO
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Unlimited breach monitoring, auto-remediation &amp; built-in VPN
          protection
        </Typography>
      </Box>

      <Stack
        direction="row"
        alignItems="center"
        gap={1.5}
        sx={{
          flexShrink: 0,
          zIndex: 1
        }}>
        
        <Box
          sx={{
            textAlign: 'center',
            bgcolor: 'rgba(255,23,68,0.1)',
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
            border: '1px solid rgba(255,23,68,0.2)'
          }}>
          
          <Stack direction="row" alignItems="center" gap={0.5}>
            <ClockIcon size={12} color="#ff1744" />
            <Typography
              variant="caption"
              sx={{
                color: '#ff1744',
                fontWeight: 700,
                fontSize: '0.65rem',
                letterSpacing: '0.05em'
              }}>
              
              72:14:33
            </Typography>
          </Stack>
        </Box>

        <Button
          variant="contained"
          size="small"
          sx={{
            background: 'linear-gradient(45deg, #0081cb 30%, #7c4dff 90%)',
            boxShadow: '0 0 15px rgba(124, 77, 255, 0.3)',
            fontWeight: 800,
            fontSize: '0.7rem',
            letterSpacing: '0.05em',
            px: 2,
            '&:hover': {
              boxShadow: '0 0 25px rgba(124, 77, 255, 0.5)'
            }
          }}>
          
          UPGRADE
        </Button>
      </Stack>

      <IconButton
        onClick={onDismiss}
        size="small"
        sx={{
          position: 'absolute',
          top: 4,
          right: 4,
          color: 'text.secondary',
          '&:hover': {
            color: 'white'
          },
          zIndex: 1
        }}>
        
        <XIcon size={14} />
      </IconButton>
    </Box>);

}