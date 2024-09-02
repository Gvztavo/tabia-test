import { useState } from 'react';
import AppBarComponent from '../Components/Appbar/Appbar';
import ComparationTable from '../Components/Table/Table';
import SectionTitle from '../Components/TitleSection/TitleSection';
import {
  MainContent,
  StyledContentMainSpace,
  ContentGroup,
  StyledDivider,
  StyledSection
} from './styled';

function App() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const handleDrawerToggle = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <MainContent>
      <AppBarComponent onDrawerToggle={handleDrawerToggle} />
      <StyledContentMainSpace open={drawerOpen}>
        <SectionTitle title='Comparison' />
        <ContentGroup>
          <StyledDivider />
          <StyledSection>
            <ComparationTable />
          </StyledSection>
        </ContentGroup>
      </StyledContentMainSpace>
    </MainContent>
  );
}

export default App;
