import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Button,
  IconButton,
  Stack } from
'@mui/material';
import {
  XIcon,
  ZapIcon,
  ShieldCheckIcon,
  GlobeIcon,
  ClockIcon } from
'lucide-react';
interface ProPopupProps {
  open: boolean;
  onClose: () => void;
}
export function ProPopup({ open, onClose }: ProPopupProps) {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour
  useEffect(() => {
    if (!open) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, [open]);
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: '#0b0f19',
          backgroundImage:
          'linear-gradient(135deg, rgba(0, 176, 255, 0.1) 0%, rgba(11, 15, 25, 1) 100%)',
          border: '1px solid rgba(0, 176, 255, 0.3)',
          boxShadow: '0 0 40px rgba(0, 176, 255, 0.2)',
          borderRadius: 2,
          overflow: 'hidden'
        }
      }}>
      
      <Box
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          zIndex: 10
        }}>
        
        <IconButton
          onClick={onClose}
          sx={{
            color: 'text.secondary',
            '&:hover': {
              color: 'white'
            }
          }}>
          
          <XIcon size={20} />
        </IconButton>
      </Box>

      <DialogContent
        sx={{
          p: 0
        }}>
        
        <Box
          sx={{
            p: 4,
            textAlign: 'center',
            position: 'relative'
          }}>
          
          {/* Background Glow */}
          <Box
            sx={{
              position: 'absolute',
              top: '20%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 150,
              height: 150,
              background:
              'radial-gradient(circle, rgba(0, 176, 255, 0.3) 0%, transparent 70%)',
              filter: 'blur(20px)',
              zIndex: 0
            }} />
          

          <Box
            sx={{
              position: 'relative',
              zIndex: 1
            }}>
            
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mb: 2
              }}>
              
              <Box
                sx={{
                  p: 2,
                  bgcolor: 'rgba(0, 176, 255, 0.1)',
                  borderRadius: '50%',
                  border: '1px solid rgba(0, 176, 255, 0.3)',
                  boxShadow: '0 0 20px rgba(0, 176, 255, 0.2)'
                }}>
                
                <ZapIcon size={40} color="#00b0ff" />
              </Box>
            </Box>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: 'white',
                mb: 1,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
              
              Upgrade to{' '}
              <span
                style={{
                  color: '#00b0ff'
                }}>
                
                PRO
              </span>
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mb: 4
              }}>
              
              Unlock military-grade protection and advanced telemetry.
            </Typography>

            <Stack
              spacing={2}
              sx={{
                textAlign: 'left',
                mb: 4,
                maxWidth: 300,
                mx: 'auto'
              }}>
              
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2
                }}>
                
                <GlobeIcon size={20} color="#00e676" />
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600
                  }}>
                  
                  Real-time Dark Web Monitoring
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2
                }}>
                
                <ShieldCheckIcon size={20} color="#00e676" />
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600
                  }}>
                  
                  Automated 1-Click Remediation
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2
                }}>
                
                <ZapIcon size={20} color="#00e676" />
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600
                  }}>
                  
                  Priority Cloud Sync
                </Typography>
              </Box>
            </Stack>

            <Box
              sx={{
                bgcolor: 'rgba(255, 23, 68, 0.1)',
                border: '1px solid rgba(255, 23, 68, 0.3)',
                borderRadius: 2,
                p: 2,
                mb: 4,
                display: 'inline-block'
              }}>
              
              <Typography
                variant="caption"
                sx={{
                  color: '#ff1744',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  justifyContent: 'center'
                }}>
                
                <ClockIcon size={14} /> LIMITED TIME OFFER: 50% OFF
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: 'white',
                  fontWeight: 800,
                  mt: 1,
                  fontFamily: 'monospace'
                }}>
                
                {formatTime(timeLeft)}
              </Typography>
            </Box>

            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{
                py: 2,
                fontSize: '1.2rem',
                fontWeight: 800,
                letterSpacing: '0.1em',
                borderRadius: 2,
                boxShadow: '0 0 20px rgba(0, 176, 255, 0.4)',
                '&:hover': {
                  boxShadow: '0 0 30px rgba(0, 176, 255, 0.6)'
                }
              }}>
              
              ACTIVATE PRO NOW
            </Button>
            <Button
              onClick={onClose}
              sx={{
                mt: 2,
                color: 'text.secondary',
                fontSize: '0.8rem'
              }}>
              
              Continue with Free Version
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>);

}