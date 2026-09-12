import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  Stack,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress } from
'@mui/material';
import {
  ShieldAlertIcon,
  AlertTriangleIcon,
  InfoIcon,
  ExternalLinkIcon,
  KeyIcon,
  CheckCircleIcon } from
'lucide-react';
import { BreachAlert, VaultEntry } from '../types';
interface AlertsProps {
  alerts: BreachAlert[];
  vault: VaultEntry[];
  onResolve: (alertId: string, vaultEntryId?: string) => void;
}
export function Alerts({ alerts, vault, onResolve }: AlertsProps) {
  const [activeTab, setActiveTab] = useState<'active' | 'resolved'>('active');
  const [remediationAlert, setRemediationAlert] = useState<BreachAlert | null>(
    null
  );
  const [remediationStep, setRemediationStep] = useState<number>(0);
  const activeAlerts = alerts.filter((a) => !a.isActioned);
  const resolvedAlerts = alerts.filter((a) => a.isActioned);
  const displayAlerts = activeTab === 'active' ? activeAlerts : resolvedAlerts;
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return '#ff1744';
      case 'warning':
        return '#ff9100';
      default:
        return '#00b0ff';
    }
  };
  const getSeverityIcon = (severity: string) => {
    const color = getSeverityColor(severity);
    switch (severity) {
      case 'critical':
        return (
          <ShieldAlertIcon
            size={24}
            color={color}
            style={{
              filter: `drop-shadow(0 0 8px ${color}80)`
            }} />);


      case 'warning':
        return (
          <AlertTriangleIcon
            size={24}
            color={color}
            style={{
              filter: `drop-shadow(0 0 8px ${color}80)`
            }} />);


      default:
        return (
          <InfoIcon
            size={24}
            color={color}
            style={{
              filter: `drop-shadow(0 0 8px ${color}80)`
            }} />);


    }
  };
  const startRemediation = (alert: BreachAlert) => {
    setRemediationAlert(alert);
    setRemediationStep(1);
  };
  const handleNextStep = () => {
    if (remediationStep === 1) {
      setRemediationStep(2);
    } else if (remediationStep === 2) {
      setRemediationStep(3);
      setTimeout(() => {
        if (remediationAlert) {
          onResolve(remediationAlert.id, remediationAlert.vaultEntryId);
          setRemediationAlert(null);
          setRemediationStep(0);
        }
      }, 1500);
    }
  };
  const getVaultEntry = (id?: string) => vault.find((v) => v.id === id);
  return (
    <Box
      sx={{
        p: 4,
        maxWidth: 900,
        mx: 'auto'
      }}>
      
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          mb: 4
        }}>
        
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
          
          Threat Intelligence
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            bgcolor: 'rgba(0,0,0,0.3)',
            p: 0.5,
            borderRadius: 1,
            border: '1px solid rgba(255,255,255,0.05)'
          }}>
          
          <Button
            variant={activeTab === 'active' ? 'contained' : 'text'}
            color="primary"
            size="small"
            onClick={() => setActiveTab('active')}
            sx={{
              borderRadius: 1,
              minWidth: 100
            }}>
            
            ACTIVE ({activeAlerts.length})
          </Button>
          <Button
            variant={activeTab === 'resolved' ? 'contained' : 'text'}
            color="primary"
            size="small"
            onClick={() => setActiveTab('resolved')}
            sx={{
              borderRadius: 1,
              minWidth: 100
            }}>
            
            RESOLVED ({resolvedAlerts.length})
          </Button>
        </Box>
      </Box>

      <Stack spacing={2}>
        {displayAlerts.length === 0 ?
        <Card
          sx={{
            p: 6,
            textAlign: 'center',
            border: '1px solid rgba(0, 230, 118, 0.3)',
            bgcolor: 'rgba(0, 230, 118, 0.05)'
          }}>
          
            <CheckCircleIcon
            size={48}
            color="#00e676"
            style={{
              margin: '0 auto',
              marginBottom: 16,
              filter: 'drop-shadow(0 0 10px rgba(0,230,118,0.5))'
            }} />
          
            <Typography
            variant="h6"
            sx={{
              color: '#00e676',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}>
            
              System Secure
            </Typography>
            <Typography variant="body2" color="text.secondary">
              No {activeTab} threats detected in monitored databases.
            </Typography>
          </Card> :

        displayAlerts.map((alert) => {
          const entry = getVaultEntry(alert.vaultEntryId);
          const color = getSeverityColor(alert.severity);
          return (
            <Card
              key={alert.id}
              sx={{
                p: 0,
                overflow: 'hidden',
                borderLeft: `4px solid ${color}`,
                boxShadow: `inset 2px 0 10px ${color}15`
              }}>
              
                <Box
                sx={{
                  p: 3,
                  display: 'flex',
                  gap: 3
                }}>
                
                  <Box
                  sx={{
                    mt: 0.5
                  }}>
                  
                    {getSeverityIcon(alert.severity)}
                  </Box>
                  <Box
                  sx={{
                    flex: 1
                  }}>
                  
                    <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      mb: 1
                    }}>
                    
                      <Typography
                      variant="h6"
                      sx={{
                        color: color,
                        textShadow: `0 0 10px ${color}40`
                      }}>
                      
                        {alert.title}
                      </Typography>
                      <Chip
                      label={alert.severity}
                      size="small"
                      sx={{
                        bgcolor: `${color}20`,
                        color: color,
                        border: `1px solid ${color}40`,
                        borderRadius: 1,
                        fontWeight: 700
                      }} />
                    
                    </Box>
                    <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 2
                    }}>
                    
                      {alert.description}
                    </Typography>

                    <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 4,
                      mb: 3,
                      p: 2,
                      bgcolor: 'rgba(0,0,0,0.2)',
                      borderRadius: 1
                    }}>
                    
                      <Box>
                        <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{
                          letterSpacing: '0.05em'
                        }}>
                        
                          TARGET
                        </Typography>
                        <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'monospace',
                          color: 'text.primary'
                        }}>
                        
                          {alert.affectedEmail}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{
                          letterSpacing: '0.05em'
                        }}>
                        
                          DATE
                        </Typography>
                        <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'monospace',
                          color: 'text.primary'
                        }}>
                        
                          {alert.breachDate}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{
                          letterSpacing: '0.05em'
                        }}>
                        
                          EXPOSED DATA
                        </Typography>
                        <Typography
                        variant="body2"
                        sx={{
                          color: 'text.primary'
                        }}>
                        
                          {alert.dataTypes.join(', ')}
                        </Typography>
                      </Box>
                    </Box>

                    {!alert.isActioned && entry &&
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: 'rgba(0, 176, 255, 0.05)',
                      borderRadius: 1,
                      border: '1px solid rgba(0, 176, 255, 0.2)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                    
                        <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2
                      }}>
                      
                          <KeyIcon size={18} color="#00b0ff" />
                          <Box>
                            <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 600
                          }}>
                          
                              {entry.title} requires rotation
                            </Typography>
                          </Box>
                        </Box>
                        <Button
                      variant="contained"
                      color={
                      alert.severity === 'critical' ? 'error' : 'primary'
                      }
                      onClick={() => startRemediation(alert)}
                      sx={{
                        borderRadius: 4,
                        px: 3
                      }}>
                      
                          AUTO-FIX
                        </Button>
                      </Box>
                  }
                  </Box>
                </Box>
              </Card>);

        })
        }
      </Stack>

      {/* Remediation Flow Dialog */}
      <Dialog
        open={remediationStep > 0}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: '#0b0f19',
            backgroundImage: 'none',
            border: '1px solid rgba(0, 176, 255, 0.3)',
            boxShadow: '0 0 40px rgba(0, 176, 255, 0.2)'
          }
        }}>
        
        <DialogTitle
          sx={{
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            pb: 2,
            bgcolor: 'rgba(0,0,0,0.2)'
          }}>
          
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5
            }}>
            
            <ShieldAlertIcon size={20} color="#00b0ff" />
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>
              
              Remediation Protocol
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent
          sx={{
            py: 6
          }}>
          
          {remediationStep === 1 &&
          <Box
            sx={{
              textAlign: 'center'
            }}>
            
              <Typography
              variant="h6"
              sx={{
                mb: 1,
                color: '#00b0ff'
              }}>
              
                PHASE 1: AUTHENTICATION
              </Typography>
              <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 4
              }}>
              
                Establishing secure connection to{' '}
                <strong>
                  {getVaultEntry(remediationAlert?.vaultEntryId)?.title}
                </strong>{' '}
                to inject current credentials.
              </Typography>
              <Box
              sx={{
                p: 3,
                bgcolor: 'rgba(0, 176, 255, 0.1)',
                borderRadius: '50%',
                display: 'inline-flex',
                border: '1px solid rgba(0, 176, 255, 0.3)',
                boxShadow: '0 0 20px rgba(0, 176, 255, 0.2)'
              }}>
              
                <ExternalLinkIcon size={32} color="#00b0ff" />
              </Box>
            </Box>
          }

          {remediationStep === 2 &&
          <Box
            sx={{
              textAlign: 'center'
            }}>
            
              <Typography
              variant="h6"
              sx={{
                mb: 1,
                color: '#00e676'
              }}>
              
                PHASE 2: GENERATION
              </Typography>
              <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 4
              }}>
              
                Synthesizing high-entropy cryptographic key and updating remote
                service.
              </Typography>
              <Box
              sx={{
                p: 3,
                bgcolor: 'rgba(0, 230, 118, 0.1)',
                borderRadius: '50%',
                display: 'inline-flex',
                border: '1px solid rgba(0, 230, 118, 0.3)',
                boxShadow: '0 0 20px rgba(0, 230, 118, 0.2)'
              }}>
              
                <KeyIcon size={32} color="#00e676" />
              </Box>
            </Box>
          }

          {remediationStep === 3 &&
          <Box
            sx={{
              textAlign: 'center'
            }}>
            
              <CircularProgress
              size={48}
              sx={{
                mb: 3,
                color: '#00b0ff'
              }} />
            
              <Typography
              variant="h6"
              sx={{
                mb: 1,
                letterSpacing: '0.1em'
              }}>
              
                ENCRYPTING...
              </Typography>
              <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontFamily: 'monospace'
              }}>
              
                Updating local vault and clearing threat flags.
              </Typography>
            </Box>
          }
        </DialogContent>
        {remediationStep < 3 &&
        <DialogActions
          sx={{
            p: 3,
            pt: 0,
            bgcolor: 'rgba(0,0,0,0.2)',
            borderTop: '1px solid rgba(255,255,255,0.05)'
          }}>
          
            <Button
            onClick={() => setRemediationStep(0)}
            sx={{
              color: 'text.secondary'
            }}>
            
              ABORT
            </Button>
            <Button
            variant="contained"
            color="primary"
            onClick={handleNextStep}
            sx={{
              borderRadius: 1
            }}>
            
              {remediationStep === 1 ? 'EXECUTE PHASE 1' : 'EXECUTE PHASE 2'}
            </Button>
          </DialogActions>
        }
      </Dialog>
    </Box>);

}