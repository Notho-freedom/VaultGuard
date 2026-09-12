import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Card,
  Slider,
  Switch,
  FormControlLabel,
  IconButton,
  Tooltip,
  Stack } from
'@mui/material';
import {
  CopyIcon,
  RefreshCwIcon,
  ShieldCheckIcon,
  ActivityIcon } from
'lucide-react';
export function Generator() {
  const [length, setLength] = useState<number>(24);
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [password, setPassword] = useState('');
  const generatePassword = () => {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let chars = '';
    if (useUpper) chars += upper;
    if (useLower) chars += lower;
    if (useNumbers) chars += numbers;
    if (useSymbols) chars += symbols;
    if (chars === '') {
      setUseLower(true);
      chars = lower;
    }
    let generated = '';
    for (let i = 0; i < length; i++) {
      generated += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(generated);
  };
  useEffect(() => {
    generatePassword();
  }, [length, useUpper, useLower, useNumbers, useSymbols]);
  const getStrengthColor = () => {
    if (length < 12) return '#ff1744';
    if (length < 16) return '#ff9100';
    return '#00e676';
  };
  const strengthColor = getStrengthColor();
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
        
        Key Generator
      </Typography>

      <Card
        sx={{
          p: 4,
          border: `1px solid ${strengthColor}40`,
          boxShadow: `inset 0 0 20px ${strengthColor}10`
        }}>
        
        <Box
          sx={{
            bgcolor: 'rgba(0,0,0,0.4)',
            p: 4,
            borderRadius: 2,
            mb: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '1px solid rgba(255,255,255,0.05)'
          }}>
          
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'monospace',
              letterSpacing: 2,
              color: strengthColor,
              wordBreak: 'break-all',
              textShadow: `0 0 10px ${strengthColor}80`
            }}>
            
            {password}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              ml: 2,
              flexShrink: 0
            }}>
            
            <Tooltip title="Regenerate">
              <IconButton
                onClick={generatePassword}
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: 'primary.main'
                  }
                }}>
                
                <RefreshCwIcon size={20} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Copy to Clipboard">
              <IconButton
                sx={{
                  color: 'primary.main',
                  bgcolor: 'rgba(0, 176, 255, 0.1)',
                  '&:hover': {
                    bgcolor: 'rgba(0, 176, 255, 0.2)'
                  }
                }}>
                
                <CopyIcon size={20} />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        <Box
          sx={{
            mb: 5
          }}>
          
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mb: 2
            }}>
            
            <Typography
              variant="subtitle2"
              sx={{
                letterSpacing: '0.05em',
                color: 'text.secondary'
              }}>
              
              ENTROPY LENGTH
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 700,
                color: strengthColor
              }}>
              
              {length} BITS
            </Typography>
          </Box>
          <Slider
            value={length}
            onChange={(_, val) => setLength(val as number)}
            min={8}
            max={64}
            sx={{
              color: strengthColor,
              '& .MuiSlider-thumb': {
                boxShadow: `0 0 10px ${strengthColor}`
              }
            }} />
          
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            mb: 4
          }}>
          
          <Stack
            spacing={2}
            sx={{
              flex: 1,
              minWidth: 200
            }}>
            
            <FormControlLabel
              control={
              <Switch
                checked={useUpper}
                onChange={(e) => setUseUpper(e.target.checked)}
                color="primary" />

              }
              label={
              <Typography
                variant="body2"
                sx={{
                  fontFamily: 'monospace'
                }}>
                
                  [A-Z] UPPERCASE
                </Typography>
              } />
            
            <FormControlLabel
              control={
              <Switch
                checked={useLower}
                onChange={(e) => setUseLower(e.target.checked)}
                color="primary" />

              }
              label={
              <Typography
                variant="body2"
                sx={{
                  fontFamily: 'monospace'
                }}>
                
                  [a-z] LOWERCASE
                </Typography>
              } />
            
          </Stack>
          <Stack
            spacing={2}
            sx={{
              flex: 1,
              minWidth: 200
            }}>
            
            <FormControlLabel
              control={
              <Switch
                checked={useNumbers}
                onChange={(e) => setUseNumbers(e.target.checked)}
                color="primary" />

              }
              label={
              <Typography
                variant="body2"
                sx={{
                  fontFamily: 'monospace'
                }}>
                
                  [0-9] NUMERIC
                </Typography>
              } />
            
            <FormControlLabel
              control={
              <Switch
                checked={useSymbols}
                onChange={(e) => setUseSymbols(e.target.checked)}
                color="primary" />

              }
              label={
              <Typography
                variant="body2"
                sx={{
                  fontFamily: 'monospace'
                }}>
                
                  [!@#] SYMBOLS
                </Typography>
              } />
            
          </Stack>
        </Box>

        <Box
          sx={{
            mt: 4,
            p: 2,
            bgcolor: 'rgba(0, 230, 118, 0.05)',
            borderRadius: 1,
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            border: '1px solid rgba(0, 230, 118, 0.2)'
          }}>
          
          <ShieldCheckIcon size={20} color="#00e676" />
          <Typography
            variant="caption"
            sx={{
              color: '#00e676',
              letterSpacing: '0.05em'
            }}>
            
            LOCAL GENERATION ONLY. NO NETWORK TRANSMISSION.
          </Typography>
        </Box>
      </Card>

      {/* New Feature: Password Tester */}
      <Typography
        variant="h5"
        sx={{
          mt: 6,
          mb: 3,
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
        
        Strength Analyzer
      </Typography>
      <Card
        sx={{
          p: 4
        }}>
        
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            mb: 3
          }}>
          
          <ActivityIcon size={24} color="#00b0ff" />
          <Typography variant="body2" color="text.secondary">
            Test the entropy and crack time of an existing password.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: 2
          }}>
          
          <input
            type="password"
            placeholder="Enter password to analyze..."
            style={{
              flex: 1,
              padding: '12px 16px',
              backgroundColor: 'rgba(0,0,0,0.4)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '6px',
              color: 'white',
              fontFamily: 'monospace',
              outline: 'none'
            }} />
          
          <Button
            variant="contained"
            color="primary"
            sx={{
              px: 4,
              fontWeight: 800
            }}>
            
            ANALYZE
          </Button>
        </Box>
      </Card>
    </Box>);

}