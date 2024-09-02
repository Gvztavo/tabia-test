
import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  Grid2
} from '@mui/material';
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
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';


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

// Dados da tabela/ Tem que transformar em Json
const data = [
  { team: 'All Teams', participation: 97, enps: 97, engagement: 6.2, recognition: 4.9, feedback: 6.2, peers: 6.2, manager: 6.2, satisfaction: 6.2, alignment: 6.2, happiness: 6.2, wellness: 6.2, growth: 6.2, ambassador: 6.2 },
  { team: 'Team Brazil', participation: 97, enps: 97, engagement: 6.2, recognition: 6.2, feedback: 4.5, peers: 8.4, manager: 6.2, satisfaction: 6.2, alignment: 6.2, happiness: 6.2, wellness: 6.2, growth: 6.2, ambassador: 6.2 },
  { team: 'Team US', participation: 97, enps: 97, engagement: 6.1, recognition: 3, feedback: 6.1, peers: 6.1, manager: 6.1, satisfaction: 6.1, alignment: 3, happiness: 6.1, wellness: 6.1, growth: 6.1, ambassador: 6.1 },
  { team: 'Team France', participation: 97, enps: 97, engagement: 6.1, recognition: 6.1, feedback: 6.1, peers: 8.1, manager: 8.3, satisfaction: 7.9, alignment: 6.1, happiness: 6.1, wellness: 6.1, growth: 6.1, ambassador: 6.1 },
  { team: 'Team England', participation: 97, enps: 97, engagement: 6.2, recognition: 2.3, feedback: 6.2, peers: 6.2, manager: 6.2, satisfaction: 6.2, alignment: 3.4, happiness: 6.2, wellness: 6.2, growth: 6.2, ambassador: 6.2 },
  { team: 'Team England', participation: 97, enps: 97, engagement: 6.2, recognition: 2.3, feedback: 6.2, peers: 6.2, manager: 6.2, satisfaction: 6.2, alignment: 3.4, happiness: 6.2, wellness: 6.2, growth: 6.2, ambassador: 6.2 },
  { team: 'Team England', participation: 97, enps: 97, engagement: 6.2, recognition: 2.3, feedback: 6.2, peers: 6.2, manager: 6.2, satisfaction: 6.2, alignment: 3.4, happiness: 6.2, wellness: 6.2, growth: 6.2, ambassador: 6.2 },
  { team: 'Team England', participation: 97, enps: 97, engagement: 6.2, recognition: 2.3, feedback: 6.2, peers: 6.2, manager: 6.2, satisfaction: 6.2, alignment: 3.4, happiness: 6.2, wellness: 6.2, growth: 6.2, ambassador: 6.2 },
  { team: 'Team England', participation: 97, enps: 97, engagement: 6.2, recognition: 2.3, feedback: 6.2, peers: 6.2, manager: 6.2, satisfaction: 6.2, alignment: 3.4, happiness: 6.2, wellness: 6.2, growth: 6.2, ambassador: 6.2 },
];


const ComparationTable: React.FC = () => {

  return (
    <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="comparison table">

        <TableHead>

          <TableRow>

            <TableCell sx={{ width: "20%", border: 0, fontSize: "14px", fontWeight: 700, color: '#1C1E2A', fontFamily: "Open Sans", padding: 0 }}>
              <Grid2 sx={{ display: "flex", paddingLeft: '13px', paddingTop: "235px", border: "1px solid #F1F1F5", paddingBottom:'10px' }}>

                Teams <ArrowDropUpIcon sx={{ color: '#2678FF' }} /></Grid2></TableCell>

            <TableCell
              sx={{
                width: "80px",
                backgroundColor: '#F8F8F8',
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                fontWeight: 600,
                color: '#62656C',
                borderRight: "5px solid white",
                borderBottom: "1px solid white",
                borderLeft: "5px solid white",
                fontFamily: "Open Sans",
                padding: '10px 0px 0px 0px',
              }}
            >
              <ModeCommentIcon sx={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                color: '#BFC7D0',
                marginBottom: '10px',
                fontSize: "16px",
              }} />

              Participation (%)
            </TableCell>

            <TableCell
              sx={{
                width: "80px",
                backgroundColor: '#F8F8F8',
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                fontWeight: 600,
                color: '#62656C',
                border: 0,
                borderRight: "5px solid white",
                fontFamily: "Open Sans",
                padding: '10px 0px 0px 0px'
              }}
            >
              <FavoriteIcon sx={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                color: '#BFC7D0',
                marginBottom: '10px',
                fontSize: "16px"
              }} />
              eNPS
            </TableCell>

            <TableCell

              sx={{
                width: "80px",
                backgroundColor: '#F8F8F8',
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                fontWeight: 600,
                color: '#62656C',
                border: 0,
                borderRight: "5px solid white",
                fontFamily: "Open Sans",
                padding: '10px 0px 0px 0px'
              }}
            >
              <ShowChartIcon sx={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                color: '#BFC7D0',
                marginBottom: '10px',
                fontSize: "16px"
              }} />

              Overall Engagement
            </TableCell>

            <TableCell
              sx={{
                width: "80px",
                backgroundColor: '#F8F8F8',
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                fontWeight: 600,
                color: '#62656C',
                border: 0,
                borderRight: "5px solid white",
                fontFamily: "Open Sans",
                padding: '10px 0px 0px 0px'
              }}
            >
              <EmojiEventsIcon sx={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                color: '#BFC7D0',
                marginBottom: '10px',
                fontSize: "16px"
              }} />

              Recognition
            </TableCell>

            <TableCell
              sx={{
                width: "80px",
                backgroundColor: '#F8F8F8',
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                fontWeight: 600,
                color: '#62656C',
                border: 0,
                borderRight: "5px solid white",
                fontFamily: "Open Sans",
                padding: '10px 0px 0px 0px'
              }}
            >
              <CommentIcon sx={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                color: '#BFC7D0',
                marginBottom: '10px',
                fontSize: "16px"
              }} />


              Feedback
            </TableCell>

            <TableCell
              sx={{
                width: "80px",
                backgroundColor: '#F8F8F8',
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                fontWeight: 600,
                color: '#62656C',
                border: 0,
                borderRight: "5px solid white",
                fontFamily: "Open Sans",
                padding: '10px 0px 0px 0px'
              }}
            >
              <GroupIcon sx={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                color: '#BFC7D0',
                marginBottom: '10px',
                fontSize: "16px"
              }} />
              Relationship with Peers
            </TableCell>

            <TableCell
              sx={{
                width: "80px",
                backgroundColor: '#F8F8F8',
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                fontWeight: 600,
                color: '#62656C',
                border: 0,
                borderRight: "5px solid white",
                fontFamily: "Open Sans",
                padding: '10px 0px 0px 0px'
              }}
            >
              <SettingsInputComponentIcon sx={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                color: '#BFC7D0',
                marginBottom: '10px',
                fontSize: "16px"
              }} />
              Relationship with Manager
            </TableCell>

            <TableCell
              sx={{
                width: "80px",
                backgroundColor: '#F8F8F8',
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                fontWeight: 600,
                color: '#62656C',
                border: 0,
                borderRight: "5px solid white",
                fontFamily: "Open Sans",
                padding: '10px 0px 0px 0px'
              }}
            >
              <ThumbUpIcon sx={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                color: '#BFC7D0',
                marginBottom: '10px',
                fontSize: "16px"
              }} />

              Satisfaction
            </TableCell>

            <TableCell
              sx={{
                width: "80px",
                backgroundColor: '#F8F8F8',
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                fontWeight: 600,
                color: '#62656C',
                border: 0,
                borderRight: "5px solid white",
                fontFamily: "Open Sans",
                padding: '10px 0px 0px 0px'
              }}
            >
              <ExploreIcon sx={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                color: '#BFC7D0',
                marginBottom: '10px',
                fontSize: "16px"
              }} />
              Alignment
            </TableCell>

            <TableCell
              sx={{
                width: "80px",
                backgroundColor: '#F8F8F8',
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                fontWeight: 600,
                color: '#62656C',
                border: 0,
                borderRight: "5px solid white",
                fontFamily: "Open Sans",
                padding: '10px 0px 0px 0px'
              }}
            >
              <EmojiEmotionsIcon sx={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                color: '#BFC7D0',
                marginBottom: '10px',
                fontSize: "16px"
              }} />
              Happiness
            </TableCell>

            <TableCell
              sx={{
                width: "80px",
                backgroundColor: '#F8F8F8',
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                fontWeight: 600,
                color: '#62656C',
                border: 0,
                borderRight: "5px solid white",
                fontFamily: "Open Sans",
                padding: '10px 0px 0px 0px'
              }}
            >
              <Diversity1Icon sx={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                color: '#BFC7D0',
                marginBottom: '10px',
                fontSize: "16px"
              }} />
              Wellness
            </TableCell>
            <TableCell
              sx={{
                width: "80px",
                backgroundColor: '#F8F8F8',
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                fontWeight: 600,
                color: '#62656C',
                border: 0,
                borderRight: "5px solid white",
                fontFamily: "Open Sans",
                padding: '10px 0px 0px 0px'
              }}
            >
              <ForestSharpIcon sx={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                color: '#BFC7D0',
                marginBottom: '10px',
                fontSize: "16px"
              }} />
              Personal Growth
            </TableCell>
            <TableCell
              sx={{
                width: "80px",
                backgroundColor: '#F8F8F8',
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                fontWeight: 600,
                color: '#62656C',
                border: 0,
                borderRight: "5px solid white",
                fontFamily: "Open Sans",
                padding: '10px 0px 0px 0px'
              }}
            >
              <FlagSharpIcon sx={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                color: '#BFC7D0',
                marginBottom: '10px',
                fontSize: "16px"
              }} />
              Ambassadorship
            </TableCell>


          </TableRow>
        </TableHead>

        <TableRow sx={{ height: '5px' }}>

        </TableRow>

        <TableBody>
          {data.map((row) => (
            <TableRow key={row.team}>

              <TableCell sx={{ border: "none", padding: 0 }}><Grid2 sx={{ padding: '0px', height: '52px', border: "1px solid #F1F1F5", display: 'flex', alignItems: "center", paddingLeft: '13px' }}>
                {row.team}
              </Grid2></TableCell>

              <TableCell align="center" sx={{ color: '#1C1E2A', fontFamily: 'Open Sans', fontSize: "14px", fontWeight: 600, borderBottom: "5px solid white" }}>{row.participation}</TableCell>

              <TableCell align="center" sx={{ color: '#1C1E2A', fontFamily: 'Open Sans', fontSize: "14px", fontWeight: 600, border: "5px solid white" }}>{row.enps}</TableCell>

              <TableCell align="center" style={{ color: '#1C1E2A', fontFamily: 'Open Sans', fontSize: "14px", fontWeight: 600, border: "5px solid white" }} sx={getCellStyle(row.engagement)}>{row.engagement}</TableCell>

              <TableCell align="center" style={{ color: '#1C1E2A', fontFamily: 'Open Sans', fontSize: "14px", fontWeight: 600, border: "5px solid white" }} sx={getCellStyle(row.recognition)}>{row.recognition}</TableCell>

              <TableCell align="center" style={{ color: '#1C1E2A', fontFamily: 'Open Sans', fontSize: "14px", fontWeight: 600, border: "5px solid white" }} sx={getCellStyle(row.feedback)}>{row.feedback}</TableCell>

              <TableCell align="center" style={{ color: '#1C1E2A', fontFamily: 'Open Sans', fontSize: "14px", fontWeight: 600, border: "5px solid white" }} sx={getCellStyle(row.peers)}>{row.peers}</TableCell>

              <TableCell align="center" style={{ color: '#1C1E2A', fontFamily: 'Open Sans', fontSize: "14px", fontWeight: 600, border: "5px solid white" }} sx={getCellStyle(row.manager)}>{row.manager}</TableCell>

              <TableCell align="center" style={{ color: '#1C1E2A', fontFamily: 'Open Sans', fontSize: "14px", fontWeight: 600, border: "5px solid white" }} sx={getCellStyle(row.satisfaction)}>{row.satisfaction}</TableCell>

              <TableCell align="center" style={{ color: '#1C1E2A', fontFamily: 'Open Sans', fontSize: "14px", fontWeight: 600, border: "5px solid white" }} sx={getCellStyle(row.alignment)}>{row.alignment}</TableCell>

              <TableCell align="center" style={{ color: '#1C1E2A', fontFamily: 'Open Sans', fontSize: "14px", fontWeight: 600, border: "5px solid white" }} sx={getCellStyle(row.happiness)}>{row.happiness}</TableCell>

              <TableCell align="center" style={{ color: '#1C1E2A', fontFamily: 'Open Sans', fontSize: "14px", fontWeight: 600, border: "5px solid white" }} sx={getCellStyle(row.wellness)}>{row.wellness}</TableCell>

              <TableCell align="center" style={{ color: '#1C1E2A', fontFamily: 'Open Sans', fontSize: "14px", fontWeight: 600, border: "5px solid white" }} sx={getCellStyle(row.growth)}>{row.growth}</TableCell>

              <TableCell align="center" style={{ color: '#1C1E2A', fontFamily: 'Open Sans', fontSize: "14px", fontWeight: 600, border: "5px solid white" }} sx={getCellStyle(row.ambassador)}>{row.ambassador}</TableCell>

            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
};
export default ComparationTable;
