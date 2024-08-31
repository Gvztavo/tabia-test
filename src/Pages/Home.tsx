import { useState } from 'react';
import '../App.css';
import AppBarComponent from '../Components/Appbar/Appbar';
import { styled } from '@mui/system';
import { Grid2, Typography } from '@mui/material';

const ContentWrapper = styled(Grid2)<{ open: boolean }>(({ open }) => ({
  transition: 'margin 0.3s',
  marginLeft: open ? 250 : 0,
  padding: '16px',
  paddingTop: '100px'
}));

function App() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const handleDrawerToggle = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <Grid2 sx={{ backgroundColor: "black", minHeight: '100vh' }}>
      <AppBarComponent onDrawerToggle={handleDrawerToggle} />
      <ContentWrapper open={drawerOpen}>
        <Typography sx={{ color: 'white' }}>Ola</Typography>
      </ContentWrapper>

    </Grid2>
  );
}

export default App;