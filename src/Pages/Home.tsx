import { useState } from 'react';
import '../App.css';
import AppBarComponent from '../Components/Appbar/Appbar';
import { styled } from '@mui/system';
import { Grid2 } from '@mui/material';
import ComparationTable from '../Components/Table/Table';
import SectionTitle from '../Components/TitleSection/TitleSection';


const ContentWrapper = styled(Grid2)<{ open: boolean }>(({ open }) => ({
  transition: 'margin 0.3s',
  marginLeft: open ? 250 : 0,
  padding: '40px',
  paddingTop: '80px',
}));

function App() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const handleDrawerToggle = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <Grid2 sx={{ minHeight: '100vh', backgroundColor: '#F8F8F8' }}>
      <AppBarComponent onDrawerToggle={handleDrawerToggle} />
      <ContentWrapper open={drawerOpen}>

        <SectionTitle title='Comparison' />
        <Grid2 sx={{backgroundColor:"#FFFFFF"}}>
          <Grid2 sx={{height:"70px", borderBottom:'1px solid #F1F1F5',display:{md:'flex', xs:'none'}}}/>

          <Grid2 sx={{padding:{md:'50px', xs:'0px'}}}>
          <ComparationTable />
          </Grid2>
        </Grid2>
      </ContentWrapper>

    </Grid2>
  );
}

export default App;