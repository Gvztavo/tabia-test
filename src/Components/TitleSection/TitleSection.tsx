import React from 'react';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { SectionContainer, SectionTitleText, ExportButton } from './styled';

interface SectionTitleProps {
    title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
    return (
        <SectionContainer>
            <SectionTitleText>
                {title}
            </SectionTitleText>

            <ExportButton>
                <SaveAltIcon />
                Export
            </ExportButton>
        </SectionContainer>
    );
};

export default SectionTitle;