import { AppBar, Toolbar, Typography } from '@mui/material';
import App from './App';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">RE-STORE</Typography>
      </Toolbar>
    </AppBar>
  );
}
