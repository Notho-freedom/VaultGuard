import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  CircularProgress } from
'@mui/material';
import { ShieldIcon, EyeIcon, EyeOffIcon, LockIcon } from 'lucide-react';
interface UnlockPageProps {
  onUnlock: () => void;
}
export function UnlockPage({ onUnlock }: UnlockPageProps) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return;
    setIsAuthenticating(true);
    setTimeout(() => {
      setIsAuthenticating(false);
      onUnlock();
    }, 1200);
  };
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background:
        'radial-gradient(circle at center, rgba(0, 176, 255, 0.15) 0%, rgba(11, 15, 25, 1) 60%)',
        zIndex: 50
      }}>
      
      <Box
        sx={{
          maxWidth: 400,
          width: '100%',
          p: 5,
          textAlign: 'center',
          position: 'relative'
        }}>
        
        {/* Glowing Shield */}
        <Box
          sx={{
            position: 'relative',
            width: 100,
            height: 100,
            mx: 'auto',
            mb: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              background:
              'radial-gradient(circle, rgba(0, 176, 255, 0.4) 0%, transparent 70%)',
              filter: 'blur(10px)',
              animation: 'pulse 2s infinite',
              '@keyframes pulse': {
                '0%': {
                  transform: 'scale(0.95)',
                  opacity: 0.5
                },
                '50%': {
                  transform: 'scale(1.05)',
                  opacity: 0.8
                },
                '100%': {
                  transform: 'scale(0.95)',
                  opacity: 0.5
                }
              }
            }} />
          
          <ShieldIcon
            size={64}
            color="#00b0ff"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(0, 176, 255, 0.8))',
              position: 'relative',
              zIndex: 1
            }} />
          
        </Box>

        <Typography
          variant="h3"
          sx={{
            mb: 1,
            fontWeight: 800,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            background: 'linear-gradient(to bottom, #ffffff, #8b949e)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
          
          VaultGuard
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 5,
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>
          
          Zero-Knowledge Security
        </Typography>

        <form onSubmit={handleUnlock}>
          <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter Master Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isAuthenticating}
            autoFocus
            variant="outlined"
            InputProps={{
              startAdornment:
              <InputAdornment position="start">
                  <LockIcon size={18} color="#8b949e" />
                </InputAdornment>,

              endAdornment:
              <InputAdornment position="end">
                  <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                  sx={{
                    color: 'text.secondary'
                  }}>
                  
                    {showPassword ?
                  <EyeOffIcon size={18} /> :

                  <EyeIcon size={18} />
                  }
                  </IconButton>
                </InputAdornment>,

              sx: {
                bgcolor: 'rgba(0,0,0,0.4)',
                borderRadius: 2,
                fontFamily: 'monospace',
                fontSize: '1.1rem',
                letterSpacing: showPassword ? 'normal' : '0.2em',
                '& fieldset': {
                  borderColor: 'rgba(255,255,255,0.1)'
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(255,255,255,0.2)'
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#00b0ff',
                  boxShadow: '0 0 10px rgba(0, 176, 255, 0.3)'
                }
              }
            }}
            sx={{
              mb: 3
            }} />
          

          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            disabled={!password || isAuthenticating}
            sx={{
              py: 1.5,
              fontSize: '1rem',
              borderRadius: 2,
              position: 'relative',
              overflow: 'hidden'
            }}>
            
            {isAuthenticating ?
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}>
              
                <CircularProgress size={20} color="inherit" />
                <span>Decrypting Vault...</span>
              </Box> :

            'UNLOCK'
            }
          </Button>
        </form>
      </Box>
    </Box>);

}