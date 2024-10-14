import Catalog from '../../features/catalog/catalog.tsx';
import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import Header from './Header.tsx';
import { CheckRounded, Palette, PlayLesson } from '@mui/icons-material';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
    },
  });

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
