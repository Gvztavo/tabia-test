import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { StyledAppBar, StyledToolbar, StyledIconButton, StyledTitleTypography, StyledAvatar, StyledListItemButton, StyledListItemText, StyledNestedListItemText, StyledSelectedNestedListItemButton, StyledGrid2, StyledListItemButtonItem, StyledListItemButtonItemComparasion, StyledDrawerPaper } from './styled';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import chewbaca from '../../img/chewbaca.jpg'
import HomeIcon from '@mui/icons-material/Home';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';

const AppBarComponent: React.FC<{ onDrawerToggle: (open: boolean) => void }> = ({ onDrawerToggle }) => {

  const [open, setOpen] = useState(false);
  const [openAnalysis, setOpenAnalysis] = useState(true);

  const handleDrawer = () => {
    const newOpenState = !open;
    setOpen(newOpenState);
    onDrawerToggle(newOpenState);
  };

  const handleAnalysisClick = () => {
    setOpenAnalysis(!openAnalysis);
  };


  return (
    <>
      <StyledAppBar position="fixed">
        <StyledToolbar>

          <StyledGrid2>
            <StyledIconButton onClick={handleDrawer}>
              <MenuIcon />
            </StyledIconButton>
            <StyledTitleTypography>
              ãcme
            </StyledTitleTypography>
          </StyledGrid2>

          <StyledGrid2>
            <StyledIconButton>
              <HelpOutlineOutlinedIcon />
            </StyledIconButton>
            <StyledAvatar src={chewbaca} variant="square" />
          </StyledGrid2>

        </StyledToolbar>
      </StyledAppBar>

      <Drawer
        anchor="left"
        open={open}
        onClose={handleDrawer}
        PaperProps={{ component: StyledDrawerPaper }}
        BackdropProps={{ style: { display: 'none' } }}
      >

        <List>
          <StyledListItemButton>
            <StyledIconButton>
              <HomeIcon sx={{ fontSize: "30px" }} />
            </StyledIconButton>
            <StyledListItemText primary="Home" />
          </StyledListItemButton>

          <StyledListItemButton onClick={handleAnalysisClick}>
            <StyledIconButton>
              <ShowChartIcon sx={{ fontSize: "30px" }} />
            </StyledIconButton>
            <StyledListItemText primary="Analysis" />
          </StyledListItemButton>

          {openAnalysis && (
            <List>
              <StyledListItemButtonItem>
                <StyledNestedListItemText primary="Survey report" />
              </StyledListItemButtonItem>

              <StyledSelectedNestedListItemButton>
                <StyledListItemButtonItemComparasion primary="Comparison" />
              </StyledSelectedNestedListItemButton>

              <StyledListItemButtonItem>
                <StyledNestedListItemText primary="Custom polls" />
              </StyledListItemButtonItem>
            </List>
          )}

          <StyledListItemButton>
            <StyledIconButton>
              <ChatBubbleIcon sx={{ fontSize: "30px" }} />
            </StyledIconButton>
            <StyledListItemText primary="FeedBack" />
          </StyledListItemButton>

          <StyledListItemButton>
            <StyledIconButton>
              <ModeStandbyIcon sx={{ fontSize: "30px" }} />
            </StyledIconButton>
            <StyledListItemText primary="Goals" />
          </StyledListItemButton>

        </List>

      </Drawer>
      
    </>
  );
};

export default AppBarComponent;