import React from 'react';
import {HeadingBar} from './shared/HeadingBar';
import {Details} from './shared/Details';
import {
  LargeImagePlaceholder,
  ExtraSmallImagePlaceholder,
  FlexWrapper,
} from '../styles/helpers';
import styled from 'styled-components';

export function TitlePage(): JSX.Element {
  return (
    <>
      <FlexWrapper.Row>
        <h1 id="title-page" className="small-upper">
          Date of Issue&nbsp;
        </h1>
        <p className="small-upper grey">
          {new Date().toISOString().slice(0, 10)}
        </p>
      </FlexWrapper.Row>
      <HeadingBar className="inline-hr" />
      <StyledFlexWrapperRow>
        <StyledFlexWrapperColumn>
          <h2>Inspection Report</h2>
          <h2>Title Insert Here &#40;Max. Word&#41;</h2>
        </StyledFlexWrapperColumn>
        <ExtraSmallImagePlaceholder />
      </StyledFlexWrapperRow>
      <LargeImagePlaceholder />
      <Details
        details={[
          {label: 'Company Name', value: 'input'},
          {label: 'Company Address', value: 'input'},
          {label: 'Reviewer', value: 'First and Last Name'},
        ]}
      />
    </>
  );
}

const StyledFlexWrapperRow = styled(FlexWrapper.Row)`
  justify-content: space-between;
`;
const StyledFlexWrapperColumn = styled(FlexWrapper.Column)`
  justify-content: center;
  line-height: 1.3;
`;
