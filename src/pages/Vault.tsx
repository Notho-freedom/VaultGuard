import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Tooltip,
  TextField,
  InputAdornment,
  Button } from
'@mui/material';
import {
  SearchIcon,
  CopyIcon,
  ExternalLinkIcon,
  MoreVerticalIcon,
  PlusIcon,
  ShieldAlertIcon,
  ShieldCheckIcon,
  AlertTriangleIcon } from
'lucide-react';
import { VaultEntry } from '../types';
interface VaultProps {
  entries: VaultEntry[];
}
export function Vault({ entries }: VaultProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredEntries = entries.filter(
    (e) =>
    e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    e.username.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const getStrengthChip = (entry: VaultEntry) => {
    if (entry.isPwned) {
      return (
        <Chip
          icon={<ShieldAlertIcon size={12} />}
          label="PWNED"
          color="error"
          size="small"
          variant="filled"
          sx={{
            boxShadow: '0 0 8px rgba(255, 23, 68, 0.4)'
          }} />);


    }
    if (entry.strength === 'weak') {
      return (
        <Chip
          icon={<AlertTriangleIcon size={12} />}
          label="WEAK"
          color="warning"
          size="small"
          variant="filled" />);


    }
    if (entry.isReused) {
      return (
        <Chip
          label="REUSED"
          size="small"
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            color: 'text.primary'
          }} />);


    }
    return (
      <Chip
        icon={<ShieldCheckIcon size={12} />}
        label="SAFE"
        color="success"
        size="small"
        variant="outlined"
        sx={{
          borderColor: 'rgba(0, 230, 118, 0.5)',
          color: '#00e676'
        }} />);


  };
  return (
    <Box
      sx={{
        p: 4,
        maxWidth: 1200,
        mx: 'auto',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
      
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4
        }}>
        
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
          
          Database Vault
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<PlusIcon size={18} />}>
          
          ADD ENTRY
        </Button>
      </Box>

      <Card
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
        
        <Box
          sx={{
            p: 2,
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            bgcolor: 'rgba(0,0,0,0.2)',
            display: 'flex',
            gap: 2
          }}>
          
          <TextField
            size="small"
            placeholder="Search database..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment:
              <InputAdornment position="start">
                  <SearchIcon size={16} color="#8b949e" />
                </InputAdornment>

            }}
            sx={{
              width: 300
            }} />
          
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              overflowX: 'auto',
              alignItems: 'center'
            }}>
            
            {['ALL', 'COMPROMISED', 'WEAK', 'SAFE'].map((cat) =>
            <Chip
              key={cat}
              label={cat}
              onClick={() => {}}
              variant={cat === 'ALL' ? 'filled' : 'outlined'}
              color={cat === 'ALL' ? 'primary' : 'default'}
              size="small"
              sx={{
                borderRadius: 1
              }} />

            )}
          </Box>
        </Box>

        <TableContainer
          sx={{
            flex: 1,
            overflowY: 'auto'
          }}>
          
          <Table stickyHeader size="small">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    bgcolor: 'rgba(17, 24, 39, 0.95)',
                    color: 'text.secondary',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    letterSpacing: '0.05em'
                  }}>
                  
                  SERVICE
                </TableCell>
                <TableCell
                  sx={{
                    bgcolor: 'rgba(17, 24, 39, 0.95)',
                    color: 'text.secondary',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    letterSpacing: '0.05em'
                  }}>
                  
                  IDENTITY
                </TableCell>
                <TableCell
                  sx={{
                    bgcolor: 'rgba(17, 24, 39, 0.95)',
                    color: 'text.secondary',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    letterSpacing: '0.05em'
                  }}>
                  
                  SECURITY STATUS
                </TableCell>
                <TableCell
                  sx={{
                    bgcolor: 'rgba(17, 24, 39, 0.95)',
                    color: 'text.secondary',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    letterSpacing: '0.05em'
                  }}>
                  
                  MODIFIED
                </TableCell>
                <TableCell
                  sx={{
                    bgcolor: 'rgba(17, 24, 39, 0.95)'
                  }}>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredEntries.map((entry) =>
              <TableRow
                key={entry.id}
                hover
                sx={{
                  '&:last-child td, &:last-child th': {
                    border: 0
                  },
                  borderColor: 'rgba(255,255,255,0.05)',
                  bgcolor: entry.isPwned ?
                  'rgba(255, 23, 68, 0.05)' :
                  'transparent'
                }}>
                
                  <TableCell
                  sx={{
                    borderColor: 'rgba(255,255,255,0.05)'
                  }}>
                  
                    <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2
                    }}>
                    
                      <Box
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: 1,
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.85rem',
                        fontWeight: 'bold',
                        color: 'text.primary'
                      }}>
                      
                        {entry.title.charAt(0)}
                      </Box>
                      <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600
                      }}>
                      
                        {entry.title}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                  sx={{
                    borderColor: 'rgba(255,255,255,0.05)'
                  }}>
                  
                    <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontFamily: 'monospace'
                    }}>
                    
                      {entry.username}
                    </Typography>
                  </TableCell>
                  <TableCell
                  sx={{
                    borderColor: 'rgba(255,255,255,0.05)'
                  }}>
                  
                    {getStrengthChip(entry)}
                  </TableCell>
                  <TableCell
                  sx={{
                    borderColor: 'rgba(255,255,255,0.05)'
                  }}>
                  
                    <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{
                      fontFamily: 'monospace'
                    }}>
                    
                      {entry.lastChanged}
                    </Typography>
                  </TableCell>
                  <TableCell
                  align="right"
                  sx={{
                    borderColor: 'rgba(255,255,255,0.05)'
                  }}>
                  
                    <Tooltip title="Copy Password">
                      <IconButton
                      size="small"
                      sx={{
                        mr: 1,
                        color: 'text.secondary',
                        '&:hover': {
                          color: 'primary.main'
                        }
                      }}>
                      
                        <CopyIcon size={14} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Open URL">
                      <IconButton
                      size="small"
                      sx={{
                        mr: 1,
                        color: 'text.secondary',
                        '&:hover': {
                          color: 'primary.main'
                        }
                      }}>
                      
                        <ExternalLinkIcon size={14} />
                      </IconButton>
                    </Tooltip>
                    <IconButton
                    size="small"
                    sx={{
                      color: 'text.secondary'
                    }}>
                    
                      <MoreVerticalIcon size={14} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>);

}