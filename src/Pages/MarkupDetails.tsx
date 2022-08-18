import React from 'react';
import {HeadingBar} from '../Components/HeadingBar';
import {Details} from '../Components/Details';
import {
  FlexWrapper,
  MediumImagePlaceholder,
  SmallImagePlaceholder,
} from '../Components/helpers';
import styled from 'styled-components';
// import {Markups} from '../interfaces';

// type Props = {
//   markups: Markups[];
// };

export function MarkupsDetails(): JSX.Element {
  return (
    <>
      <h1 id="markup-details">Markups Details</h1>
      <HeadingBar />
      <Details
        details={[
          {label: 'Image Name', value: 'Input'},
          {label: 'Number of Markups Included', value: 'Input'},
          {label: 'Image Location', value: 'Location + link'},
        ]}
      />
      <MediumImagePlaceholder />
      <StyledFlexWrapperRow>
        <SmallImagePlaceholder />
        <StyledFlexWrapperColumn>
          <Details
            details={[
              {label: 'Markup ID', value: 'Input'},
              {label: 'Category', value: 'Input'},
              {label: 'Severity', value: 'Input'},
              {label: 'Measurements', value: 'Input'},
              {label: 'Findings', value: 'Max word count without location'},
            ]}
          />
        </StyledFlexWrapperColumn>
      </StyledFlexWrapperRow>
      <StyledFlexWrapperRow>
        <SmallImagePlaceholder />
        <StyledFlexWrapperColumn>
          <Details
            details={[
              {label: 'Markup ID', value: 'Input'},
              {label: 'Category', value: 'Input'},
              {label: 'Severity', value: 'Input'},
              {label: 'Measurements', value: 'Input'},
              {label: 'Findings', value: 'Max word count with location'},
              {label: 'Location', value: 'Max word count with findings'},
            ]}
          />
        </StyledFlexWrapperColumn>
      </StyledFlexWrapperRow>
    </>
  );
}

const StyledFlexWrapperRow = styled(FlexWrapper.Row)`
  margin-top: 0.2in;
`;
const StyledFlexWrapperColumn = styled(FlexWrapper.Column)`
  margin-left: 0.2in;
`;
