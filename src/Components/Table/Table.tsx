import React from 'react';
import { TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CommentIcon from '@mui/icons-material/Comment';
import GroupIcon from '@mui/icons-material/Group';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ExploreIcon from '@mui/icons-material/Explore';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import ForestSharpIcon from '@mui/icons-material/ForestSharp';
import FlagSharpIcon from '@mui/icons-material/FlagSharp';
import data from '../../Utils/data.json';
import { 
  ArrowIcon, 
  IconTitle, 
  StyledRowsItems, 
  StyledRowsMain, 
  StyledRowsTitle, 
  StyledTableCellCategory, 
  StyledTableCellHead, 
  StyledTableMain,  
  StyledTitleColumn 
} from './styled';

const getCellStyle = (value: number) => {
  switch (true) {
    case (value < 3):
      return { backgroundColor: '#FF7777' };
    case (value < 5):
      return { backgroundColor: '#FFBFBB' };
    case (value < 7):
      return { backgroundColor: '#DBF2E3' };
    case (value >= 7):
      return { backgroundColor: '#9BE7B7' };
    default:
      return {};
  }
};

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'ModeCommentIcon': 
      return <ModeCommentIcon sx={{ fontSize: "16px" }} />;
    case 'FavoriteIcon': 
      return <FavoriteIcon sx={{ fontSize: "16px" }} />;
    case 'ShowChartIcon': 
      return <ShowChartIcon sx={{ fontSize: "16px" }} />;
    case 'EmojiEventsIcon': 
      return <EmojiEventsIcon sx={{ fontSize: "16px" }} />;
    case 'CommentIcon': 
      return <CommentIcon sx={{ fontSize: "16px" }} />;
    case 'GroupIcon': 
      return <GroupIcon sx={{ fontSize: "16px" }} />;
    case 'SettingsInputComponentIcon': 
      return <SettingsInputComponentIcon sx={{ fontSize: "16px" }} />;
    case 'ThumbUpIcon': 
      return <ThumbUpIcon sx={{ fontSize: "16px" }} />;
    case 'ExploreIcon': 
      return <ExploreIcon sx={{ fontSize: "16px" }} />;
    case 'EmojiEmotionsIcon': 
      return <EmojiEmotionsIcon sx={{ fontSize: "16px" }} />;
    case 'Diversity1Icon': 
      return <Diversity1Icon sx={{ fontSize: "16px" }} />;
    case 'ForestSharpIcon': 
      return <ForestSharpIcon sx={{ fontSize: "16px" }} />;
    case 'FlagSharpIcon': 
      return <FlagSharpIcon sx={{ fontSize: "16px" }} />;
    default: 
      return null;
  }
};

const ComparationTable: React.FC = () => {
  const { teams, tableCategory } = data;

  return (
    <TableContainer>
      <StyledTableMain>
        <TableHead>

          <TableRow>
            <StyledTableCellHead>
              <StyledTitleColumn>Teams<ArrowIcon /></StyledTitleColumn>
            </StyledTableCellHead>
            {tableCategory.map((data, index) => (
              <StyledTableCellCategory key={index}>
                <IconTitle>{getIcon(data.icon)}</IconTitle>
                {data.title}
              </StyledTableCellCategory>
            ))}
          </TableRow>

        </TableHead>

        <TableBody>
          {teams.map((row) => (
            <TableRow key={row.team}>

              <StyledRowsMain>
                <StyledRowsTitle>{row.team}</StyledRowsTitle>
              </StyledRowsMain>

              <StyledRowsItems align="center">{row.participation}</StyledRowsItems>
              <StyledRowsItems align="center">{row.enps}</StyledRowsItems>
              <StyledRowsItems align="center" sx={getCellStyle(row.engagement)}>{row.engagement}</StyledRowsItems>
              <StyledRowsItems align="center" sx={getCellStyle(row.recognition)}>{row.recognition}</StyledRowsItems>
              <StyledRowsItems align="center" sx={getCellStyle(row.feedback)}>{row.feedback}</StyledRowsItems>
              <StyledRowsItems align="center" sx={getCellStyle(row.peers)}>{row.peers}</StyledRowsItems>
              <StyledRowsItems align="center" sx={getCellStyle(row.manager)}>{row.manager}</StyledRowsItems>
              <StyledRowsItems align="center" sx={getCellStyle(row.satisfaction)}>{row.satisfaction}</StyledRowsItems>
              <StyledRowsItems align="center" sx={getCellStyle(row.alignment)}>{row.alignment}</StyledRowsItems>
              <StyledRowsItems align="center" sx={getCellStyle(row.happiness)}>{row.happiness}</StyledRowsItems>
              <StyledRowsItems align="center" sx={getCellStyle(row.wellness)}>{row.wellness}</StyledRowsItems>
              <StyledRowsItems align="center" sx={getCellStyle(row.growth)}>{row.growth}</StyledRowsItems>
              <StyledRowsItems align="center" sx={getCellStyle(row.ambassador)}>{row.ambassador}</StyledRowsItems>

            </TableRow>
          ))}
        </TableBody>
      </StyledTableMain>
    </TableContainer>
  );
};

export default ComparationTable;
