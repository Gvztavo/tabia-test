import { styled } from '@mui/system';
import { Grid2, Table, TableCell, Icon, TableRow } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export const StyledTableMain = styled(Table)({
    minWidth: 650,
});

export const StyledTableCellHead = styled(TableCell)({
    width: "20%",
    border: 0,
    fontSize: "14px",
    fontWeight: 700,
    color: '#1C1E2A',
    fontFamily: "Open Sans",
    padding: 0,
});

export const StyledTitleColumn = styled(Grid2)({
    display: "flex",
    paddingLeft: '13px', paddingTop: "235px",
    border: "1px solid #F1F1F5",
    paddingBottom: '10px',
});

export const ArrowIcon = styled(ArrowDropUpIcon)({
    color: '#2678FF'
});

export const StyledTableCellCategory = styled(TableCell)({
    width: "80px",
    backgroundColor: '#F8F8F8',
    writingMode: "vertical-rl",
    transform: "rotate(180deg)",
    fontWeight: 600,
    color: '#62656C',
    border: 0,
    borderRight: "5px solid white",
    borderBottom: "1px solid white",
    borderLeft: "5px solid white",
    fontFamily: "Open Sans",
    padding: '10px 0px 0px 0px',
});

export const IconTitle = styled(Icon)({
    writingMode: "vertical-rl",
    transform: "rotate(180deg)",
    color: '#BFC7D0',
    marginBottom: '10px',
});

export const StyledTablePadding = styled(TableRow)({
    height: '5px'
});

export const StyledRowsMain = styled(TableCell)({
    border: "none",
    padding: '0px 2px 0px 0px'
});

export const StyledRowsTitle = styled(Grid2)({
    padding: '0px',
    height: '52px',
    border: "1px solid #F1F1F5",
    display: 'flex', alignItems: "center",
    paddingLeft: '13px',
    fontFamily: 'Open Sans',
    fontWeight: 400,
    color: '#1C1E2A',
    fontSize: '14px'
});

export const StyledRowsItems = styled(TableCell)({
    color: '#1C1E2A',
    fontFamily: 'Open Sans',
    fontSize: "14px",
    fontWeight: 600,
    border: "5px solid white"
});

