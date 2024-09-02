import { Grid2 } from '@mui/material';
import { styled } from '@mui/system';

export const MainContent = styled(Grid2)({
  minHeight: '100vh',
  backgroundColor: '#F8F8F8',
});

export const StyledContentMainSpace = styled(Grid2)<{ open: boolean }>(({ open }) => ({
  transition: 'margin 0.3s',
  marginLeft: open ? 250 : 0,
  padding: '40px',
  paddingTop: '80px',
}));

export const ContentGroup = styled(Grid2)({
  backgroundColor: "#FFFFFF",
});

export const StyledDivider = styled(Grid2)(({ theme }) => ({
    borderBottom: '1px solid #F1F1F5',
    display: 'flex',
    height: '35px',
    marginBottom:'25px',
    [theme.breakpoints.up('md')]: {
      height: '70px',
      marginBottom:'0px',
    },
  }));
  
  export const StyledSection = styled(Grid2)(({ theme }) => ({
    padding: '10px 10px',
    [theme.breakpoints.up('md')]: {
      padding: '50px', 
    },
  }));