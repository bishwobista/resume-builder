import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider, createTheme } from '@mui/material'

const myTheme = createTheme({
  palette: {
    primary: {  
      main: '#ff0000',
    },
    secondary: {
      main: '#00ff00',
    },

  },
  typography: {
    // fontFamily: 'Roboto',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
    },
  },
})


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
