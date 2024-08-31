import { styled } from '@mui/system';
import { AppBar, Toolbar, IconButton, Typography, Avatar, Grid2, ListItemButton, ListItemText, Drawer } from '@mui/material';

export const StyledDrawerPaper = styled(Grid2)({
    width: '224px',
    paddingTop: "60px",
    zIndex: 1200,
});

export const StyledAppBar = styled(AppBar)({
    zIndex: 1300,
});

export const StyledToolbar = styled(Toolbar)({
    backgroundColor: "#FFFFFF",
    display: 'flex',
    justifyContent: "space-between",
});

export const StyledGrid2 = styled(Grid2)({
    display: 'flex',
    alignItems: 'center',
});

export const StyledIconButton = styled(IconButton)({
    color: '#909196',
    marginRight: "16px",
});

export const StyledTitleTypography = styled(Typography)({
    color: '#2678FF',
    fontFamily: "Open Sans",
    fontWeight: 600,
    fontSize: '23px',
    lineHeight: '27.24px',

});

export const StyledAvatar = styled(Avatar)({
    width: 25,
    height: 25,
});

export const StyledListItemButton = styled(ListItemButton)({
    paddingLeft: 16,
});

export const StyledListItemButtonItem = styled(ListItemButton)({
    marginLeft: '22px'
});

export const StyledListItemButtonItemComparasion = styled(ListItemText)({
    marginLeft: '22px',
    color: 'black',
    paddingLeft: "40px",
});

export const StyledListItemText = styled(ListItemText)({
    color: '#62656C',
    fontFamily: "Font Awesome 6 Free",
    fontWeight: 900,
    marginTop: "10px",
});

export const StyledNestedListItemText = styled(ListItemText)({
    color: '#62656C',
    fontFamily: "Font Awesome 6 Free",
    fontWeight: 400,
    paddingLeft: "45px",
});

export const StyledSelectedNestedListItemButton = styled(ListItemButton)({
    paddingLeft: 16,
    borderLeft: "4px solid #2678FF",
});
