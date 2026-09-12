import React, { memo } from 'react';
import {
  Box,
  Typography,
  Card,
  Stack,
  Switch,
  Divider,
  Button } from
'@mui/material';
import {
  ShieldIcon,
  DatabaseIcon,
  KeyIcon,
  DownloadIcon,
  LockIcon } from
'lucide-react';
export function Settings() {
  return (
    <Box
      sx={{
        p: 4,
        maxWidth: 800,
        mx: 'auto'
      }}>
      
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
        
        Configuration
      </Typography>

      <Stack spacing={3}>
        <Card
          sx={{
            p: 0
          }}>
          
          <Box
            sx={{
              p: 2,
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              bgcolor: 'rgba(0,0,0,0.2)'
            }}>
            
            <ShieldIcon size={20} color="#00b0ff" />
            <Typography
              variant="subtitle2"
              sx={{
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>
              
              Security Protocols
            </Typography>
          </Box>
          <Stack
            divider={
            <Divider
              sx={{
                borderColor: 'rgba(255,255,255,0.05)'
              }} />

            }
            sx={{
              p: 1
            }}>
            
            <Box
              sx={{
                p: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
              
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600
                  }}>
                  
                  Zero-Knowledge Sync
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  AES-256-GCM local encryption before transmission.
                </Typography>
              </Box>
              <Switch defaultChecked color="primary" />
            </Box>
            <Box
              sx={{
                p: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                opacity: 0.7
              }}>
              
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}>
                  
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600
                    }}>
                    
                    Dark Web Telemetry
                  </Typography>
                  <Box
                    sx={{
                      bgcolor: 'rgba(0, 176, 255, 0.1)',
                      px: 0.5,
                      borderRadius: 0.5,
                      border: '1px solid rgba(0, 176, 255, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5
                    }}>
                    
                    <LockIcon size={10} color="#00b0ff" />
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: '0.55rem',
                        color: '#00b0ff',
                        fontWeight: 800
                      }}>
                      
                      PRO
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="caption" color="text.secondary">
                  Continuous background monitoring of breach feeds.
                </Typography>
              </Box>
              <Switch disabled color="primary" />
            </Box>
            <Box
              sx={{
                p: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
              
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600
                  }}>
                  
                  Auto-Lock
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Purge memory and lock after 15m inactivity.
                </Typography>
              </Box>
              <Switch defaultChecked color="primary" />
            </Box>
            <Box
              sx={{
                p: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                opacity: 0.7
              }}>
              
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}>
                  
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600
                    }}>
                    
                    Automated Remediation
                  </Typography>
                  <Box
                    sx={{
                      bgcolor: 'rgba(0, 176, 255, 0.1)',
                      px: 0.5,
                      borderRadius: 0.5,
                      border: '1px solid rgba(0, 176, 255, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5
                    }}>
                    
                    <LockIcon size={10} color="#00b0ff" />
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: '0.55rem',
                        color: '#00b0ff',
                        fontWeight: 800
                      }}>
                      
                      PRO
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="caption" color="text.secondary">
                  1-click automatic password rotation on breached sites.
                </Typography>
              </Box>
              <Switch disabled color="primary" />
            </Box>
          </Stack>
        </Card>

        <Card
          sx={{
            p: 0
          }}>
          
          <Box
            sx={{
              p: 2,
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              bgcolor: 'rgba(0,0,0,0.2)'
            }}>
            
            <DatabaseIcon size={20} color="#00b0ff" />
            <Typography
              variant="subtitle2"
              sx={{
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>
              
              Data Management
            </Typography>
          </Box>
          <Box
            sx={{
              p: 3
            }}>
            
            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<DownloadIcon size={16} />}
                sx={{
                  borderRadius: 1
                }}>
                
                EXPORT ENCRYPTED BLOB
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                sx={{
                  borderRadius: 1,
                  color: 'text.secondary',
                  borderColor: 'rgba(255,255,255,0.2)'
                }}>
                
                EXPORT CSV (PLAINTEXT)
              </Button>
            </Stack>
          </Box>
        </Card>

        <Card
          sx={{
            p: 0,
            border: '1px solid rgba(255, 23, 68, 0.3)',
            boxShadow: 'inset 0 0 20px rgba(255, 23, 68, 0.05)'
          }}>
          
          <Box
            sx={{
              p: 2,
              borderBottom: '1px solid rgba(255, 23, 68, 0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              bgcolor: 'rgba(255, 23, 68, 0.05)'
            }}>
            
            <KeyIcon size={20} color="#ff1744" />
            <Typography
              variant="subtitle2"
              sx={{
                color: '#ff1744',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>
              
              Critical Actions
            </Typography>
          </Box>
          <Box
            sx={{
              p: 3
            }}>
            
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                color="error"
                sx={{
                  borderRadius: 1
                }}>
                
                ROTATE MASTER KEY
              </Button>
              <Button
                variant="outlined"
                color="error"
                sx={{
                  borderRadius: 1
                }}>
                
                PURGE DATABASE
              </Button>
            </Stack>
          </Box>
        </Card>
      </Stack>
    </Box>);

}