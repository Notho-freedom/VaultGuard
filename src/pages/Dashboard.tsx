import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  Typography,
  Stack,
  Button,
  Divider } from
'@mui/material';
import {
  ShieldAlertIcon,
  ShieldCheckIcon,
  AlertTriangleIcon,
  ClockIcon,
  KeyIcon,
  ArrowRightIcon,
  ScanIcon,
  ZapIcon,
  ActivityIcon,
  WifiIcon } from
'lucide-react';
import { HealthScore, BreachAlert } from '../types';
import { ProBanner } from '../components/ProBanner';
interface DashboardProps {
  healthScore: HealthScore;
  alerts: BreachAlert[];
  onNavigate: (page: any) => void;
}
export function Dashboard({ healthScore, alerts, onNavigate }: DashboardProps) {
  const [showBanner, setShowBanner] = useState(true);
  const activeAlerts = alerts.filter((a) => !a.isActioned);
  const criticalAlerts = activeAlerts.filter((a) => a.severity === 'critical');
  const getScoreColor = (score: number) => {
    if (score >= 80) return '#00e676'; // Neon Green
    if (score >= 50) return '#ff9100'; // Neon Orange
    return '#ff1744'; // Neon Red
  };
  const scoreColor = getScoreColor(healthScore.overall);
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
  circumference - healthScore.overall / 100 * circumference;
  return (
    <Box
      sx={{
        p: 4,
        maxWidth: 1000,
        mx: 'auto'
      }}>
      
      {/* PRO Promotional Banner */}
      <Card
        sx={{
          mb: 4,
          p: 0,
          background:
          'linear-gradient(90deg, rgba(0, 176, 255, 0.1) 0%, rgba(11, 15, 25, 0.8) 100%)',
          border: '1px solid rgba(0, 176, 255, 0.3)',
          overflow: 'hidden',
          position: 'relative'
        }}>
        
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 4,
            bgcolor: '#00b0ff',
            boxShadow: '0 0 10px #00b0ff'
          }} />
        
        <Box
          sx={{
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
          
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}>
            
            <ZapIcon size={24} color="#00b0ff" />
            <Box>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 800,
                  color: 'white',
                  letterSpacing: '0.05em'
                }}>
                
                UPGRADE TO VAULTGUARD PRO
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Unlock automated remediation and real-time dark web monitoring.
              </Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{
              borderRadius: 1,
              fontWeight: 800
            }}>
            
            ACTIVATE NOW
          </Button>
        </Box>
      </Card>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4
        }}>
        
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
            
            System Status
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              letterSpacing: '0.05em'
            }}>
            
            LAST SCAN: 2 MINS AGO
          </Typography>
        </Box>
      </Box>

      {showBanner && <ProBanner onDismiss={() => setShowBanner(false)} />}

      <Grid container spacing={4}>
        {/* Central Scan Gauge */}
        <Grid item xs={12} md={5}>
          <Card
            sx={{
              p: 4,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
            
            {/* Background Glow */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 200,
                height: 200,
                background: `radial-gradient(circle, ${scoreColor}33 0%, transparent 70%)`,
                filter: 'blur(20px)',
                zIndex: 0
              }} />
            

            <Box
              sx={{
                position: 'relative',
                width: 220,
                height: 220,
                mb: 4,
                zIndex: 1
              }}>
              
              <svg
                width="220"
                height="220"
                viewBox="0 0 220 220"
                style={{
                  transform: 'rotate(-90deg)'
                }}>
                
                {/* Background Track */}
                <circle
                  cx="110"
                  cy="110"
                  r={radius}
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="12" />
                
                {/* Progress Arc */}
                <circle
                  cx="110"
                  cy="110"
                  r={radius}
                  fill="none"
                  stroke={scoreColor}
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  style={{
                    transition: 'stroke-dashoffset 1s ease-in-out',
                    filter: `drop-shadow(0 0 8px ${scoreColor}80)`
                  }} />
                
              </svg>
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                
                <Typography
                  variant="h2"
                  sx={{
                    color: scoreColor,
                    fontWeight: 800,
                    lineHeight: 1,
                    textShadow: `0 0 15px ${scoreColor}80`
                  }}>
                  
                  {healthScore.overall}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: 'text.secondary',
                    letterSpacing: '0.1em',
                    mt: 1
                  }}>
                  
                  HEALTH SCORE
                </Typography>
              </Box>
            </Box>

            <Button
              variant="contained"
              color={healthScore.overall >= 80 ? 'secondary' : 'error'}
              size="large"
              startIcon={<ScanIcon />}
              sx={{
                width: '80%',
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 800,
                letterSpacing: '0.1em',
                borderRadius: 8
              }}>
              
              SCAN NOW
            </Button>
          </Card>
        </Grid>

        {/* Dense Stats Grid */}
        <Grid item xs={12} md={7}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Card
                sx={{
                  p: 3,
                  bgcolor:
                  healthScore.pwned > 0 ?
                  'rgba(255, 23, 68, 0.1)' :
                  undefined,
                  borderColor:
                  healthScore.pwned > 0 ?
                  'rgba(255, 23, 68, 0.3)' :
                  undefined,
                  boxShadow:
                  healthScore.pwned > 0 ?
                  'inset 0 0 20px rgba(255, 23, 68, 0.1)' :
                  undefined
                }}>
                
                <Stack direction="row" alignItems="center" gap={1.5} mb={2}>
                  <ShieldAlertIcon
                    size={20}
                    color={healthScore.pwned > 0 ? '#ff1744' : '#8b949e'} />
                  
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color:
                      healthScore.pwned > 0 ? 'error.main' : 'text.secondary',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                    
                    Compromised
                  </Typography>
                </Stack>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color:
                    healthScore.pwned > 0 ? 'error.main' : 'text.primary',
                    textShadow:
                    healthScore.pwned > 0 ?
                    '0 0 10px rgba(255,23,68,0.5)' :
                    'none'
                  }}>
                  
                  {healthScore.pwned}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card
                sx={{
                  p: 3
                }}>
                
                <Stack direction="row" alignItems="center" gap={1.5} mb={2}>
                  <AlertTriangleIcon
                    size={20}
                    color={healthScore.weak > 0 ? '#ff9100' : '#8b949e'} />
                  
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color:
                      healthScore.weak > 0 ?
                      'warning.main' :
                      'text.secondary',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                    
                    Weak
                  </Typography>
                </Stack>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color:
                    healthScore.weak > 0 ? 'warning.main' : 'text.primary'
                  }}>
                  
                  {healthScore.weak}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card
                sx={{
                  p: 3
                }}>
                
                <Stack direction="row" alignItems="center" gap={1.5} mb={2}>
                  <KeyIcon
                    size={20}
                    color={healthScore.reused > 0 ? '#ff9100' : '#8b949e'} />
                  
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color:
                      healthScore.reused > 0 ?
                      'warning.main' :
                      'text.secondary',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                    
                    Reused
                  </Typography>
                </Stack>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color:
                    healthScore.reused > 0 ? 'warning.main' : 'text.primary'
                  }}>
                  
                  {healthScore.reused}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card
                sx={{
                  p: 3
                }}>
                
                <Stack direction="row" alignItems="center" gap={1.5} mb={2}>
                  <ClockIcon size={20} color="#8b949e" />
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: 'text.secondary',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                    
                    Old (&gt;1yr)
                  </Typography>
                </Stack>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700
                  }}>
                  
                  {healthScore.old}
                </Typography>
              </Card>
            </Grid>
          </Grid>

          {/* Action Required Section */}
          <Card
            sx={{
              mt: 2,
              p: 0
            }}>
            
            <Box
              sx={{
                p: 2,
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                bgcolor: 'rgba(0,0,0,0.2)'
              }}>
              
              <Typography
                variant="subtitle2"
                sx={{
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                
                Critical Threats
              </Typography>
              <Button
                size="small"
                endIcon={<ArrowRightIcon size={14} />}
                onClick={() => onNavigate('alerts')}
                sx={{
                  fontSize: '0.75rem'
                }}>
                
                View All
              </Button>
            </Box>

            {criticalAlerts.length > 0 ?
            <Stack
              divider={
              <Divider
                sx={{
                  borderColor: 'rgba(255,255,255,0.05)'
                }} />

              }>
              
                {criticalAlerts.slice(0, 2).map((alert) =>
              <Box
                key={alert.id}
                sx={{
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.02)'
                  }
                }}>
                
                    <Box
                  sx={{
                    p: 1,
                    bgcolor: 'rgba(255, 23, 68, 0.1)',
                    borderRadius: 1,
                    color: 'error.main',
                    border: '1px solid rgba(255, 23, 68, 0.2)'
                  }}>
                  
                      <ShieldAlertIcon size={20} />
                    </Box>
                    <Box
                  sx={{
                    flex: 1
                  }}>
                  
                      <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: 'error.main'
                    }}>
                    
                        {alert.title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {alert.affectedEmail}
                      </Typography>
                    </Box>
                    <Button
                  variant="contained"
                  color="error"
                  size="small"
                  onClick={() => onNavigate('alerts')}
                  sx={{
                    borderRadius: 4,
                    px: 2
                  }}>
                  
                      FIX
                    </Button>
                  </Box>
              )}
              </Stack> :

            <Box
              sx={{
                p: 4,
                textAlign: 'center'
              }}>
              
                <ShieldCheckIcon
                size={32}
                color="#00e676"
                style={{
                  margin: '0 auto',
                  marginBottom: 8,
                  filter: 'drop-shadow(0 0 8px rgba(0,230,118,0.5))'
                }} />
              
                <Typography
                variant="body2"
                sx={{
                  color: 'success.main',
                  fontWeight: 600
                }}>
                
                  No Critical Threats
                </Typography>
              </Box>
            }
          </Card>

          {/* Quick Actions & Ads */}
          <Grid
            container
            spacing={2}
            sx={{
              mt: 0
            }}>
            
            <Grid item xs={12} sm={6}>
              <Card
                sx={{
                  p: 2,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.05)',
                    cursor: 'pointer'
                  }
                }}>
                
                <Stack direction="row" alignItems="center" gap={2}>
                  <Box
                    sx={{
                      p: 1.5,
                      bgcolor: 'rgba(0, 230, 118, 0.1)',
                      borderRadius: 1,
                      color: '#00e676'
                    }}>
                    
                    <ActivityIcon size={20} />
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 700
                      }}>
                      
                      Health History
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      View 30-day trend
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* Product Ad */}
              <Card
                sx={{
                  p: 2,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  border: '1px solid rgba(124, 77, 255, 0.3)',
                  bgcolor: 'rgba(124, 77, 255, 0.05)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                
                <Box
                  sx={{
                    position: 'absolute',
                    top: 4,
                    right: 4,
                    bgcolor: 'rgba(124, 77, 255, 0.2)',
                    px: 1,
                    borderRadius: 1
                  }}>
                  
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: '0.5rem',
                      color: '#7c4dff',
                      fontWeight: 800
                    }}>
                    
                    AD
                  </Typography>
                </Box>
                <Stack direction="row" alignItems="center" gap={2}>
                  <Box
                    sx={{
                      p: 1.5,
                      bgcolor: 'rgba(124, 77, 255, 0.1)',
                      borderRadius: 1,
                      color: '#7c4dff'
                    }}>
                    
                    <WifiIcon size={20} />
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 700,
                        color: 'white'
                      }}>
                      
                      VaultGuard VPN
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Secure your connection
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>);

}