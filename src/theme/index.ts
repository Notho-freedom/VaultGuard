import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0b0f19', // Deep dark, almost black
      paper: 'rgba(17, 24, 39, 0.7)' // Glassmorphism base
    },
    primary: {
      main: '#00b0ff', // Electric Blue
      light: '#40c4ff',
      dark: '#0081cb'
    },
    secondary: {
      main: '#00e676', // Neon Green
      light: '#66ffa6',
      dark: '#00b248'
    },
    error: {
      main: '#ff1744', // Neon Red
      light: '#ff616f',
      dark: '#c4001d'
    },
    warning: {
      main: '#ff9100', // Neon Orange
      light: '#ffc246',
      dark: '#c56200'
    },
    success: {
      main: '#00e676', // Neon Green
      light: '#66ffa6',
      dark: '#00b248'
    },
    info: {
      main: '#00b0ff', // Electric Blue
      light: '#40c4ff',
      dark: '#0081cb'
    },
    text: {
      primary: '#e6edf3',
      secondary: '#8b949e'
    },
    divider: 'rgba(255, 255, 255, 0.08)'
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700, letterSpacing: '-0.02em' },
    h2: { fontWeight: 700, letterSpacing: '-0.01em' },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600, letterSpacing: '0.02em' },
    body2: { fontSize: '0.85rem' },
    caption: { fontSize: '0.75rem', letterSpacing: '0.03em' }
  },
  shape: {
    borderRadius: 8 // Tighter corners for a more "utility" feel
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
          'radial-gradient(circle at 50% 0%, #1a233a 0%, #0b0f19 60%)',
          backgroundAttachment: 'fixed'
        },
        '*::-webkit-scrollbar': {
          width: '8px',
          height: '8px'
        },
        '*::-webkit-scrollbar-track': {
          background: 'transparent'
        },
        '*::-webkit-scrollbar-thumb': {
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '4px'
        },
        '*::-webkit-scrollbar-thumb:hover': {
          background: 'rgba(255, 255, 255, 0.2)'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(17, 24, 39, 0.6)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(17, 24, 39, 0.6)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.05)'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          padding: '8px 20px',
          transition: 'all 0.2s ease-in-out'
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #0081cb 30%, #00b0ff 90%)',
          boxShadow: '0 3px 15px rgba(0, 176, 255, 0.3)',
          '&:hover': {
            boxShadow: '0 4px 20px rgba(0, 176, 255, 0.5)',
            transform: 'translateY(-1px)'
          }
        },
        containedSecondary: {
          background: 'linear-gradient(45deg, #00b248 30%, #00e676 90%)',
          boxShadow: '0 3px 15px rgba(0, 230, 118, 0.3)',
          color: '#000',
          '&:hover': {
            boxShadow: '0 4px 20px rgba(0, 230, 118, 0.5)',
            transform: 'translateY(-1px)'
          }
        },
        containedError: {
          background: 'linear-gradient(45deg, #c4001d 30%, #ff1744 90%)',
          boxShadow: '0 3px 15px rgba(255, 23, 68, 0.3)',
          '&:hover': {
            boxShadow: '0 4px 20px rgba(255, 23, 68, 0.5)',
            transform: 'translateY(-1px)'
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 6,
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.1)'
            },
            '&:hover fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.2)'
            },
            '&.Mui-focused fieldset': {
              borderColor: '#00b0ff',
              boxShadow: '0 0 8px rgba(0, 176, 255, 0.2)'
            }
          }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          fontWeight: 600,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          fontSize: '0.7rem'
        },
        filledError: {
          backgroundColor: 'rgba(255, 23, 68, 0.15)',
          color: '#ff1744',
          border: '1px solid rgba(255, 23, 68, 0.3)'
        },
        filledWarning: {
          backgroundColor: 'rgba(255, 145, 0, 0.15)',
          color: '#ff9100',
          border: '1px solid rgba(255, 145, 0, 0.3)'
        },
        filledSuccess: {
          backgroundColor: 'rgba(0, 230, 118, 0.15)',
          color: '#00e676',
          border: '1px solid rgba(0, 230, 118, 0.3)'
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: 'rgba(17, 24, 39, 0.85)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 24px 48px rgba(0, 0, 0, 0.5)'
        }
      }
    }
  }
});