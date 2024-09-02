import { styled } from '@mui/system';
import { Typography, Grid2, IconButton } from '@mui/material';

export const SectionContainer = styled(Grid2)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: "center",
    padding: '10px 0px',
});

export const SectionTitleText = styled(Typography)({
    color: '#1C1E2A',
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: '27.24px',
    fontFamily: "Open Sans"
});

export const ExportButton = styled(IconButton)({
    color: '#62656C',
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '14px',
    border: "1px solid #BFC7D0",
    borderRadius: "4px",
    width: '100px',
    padding: "6px 16px",
    gap: "10px",
});
