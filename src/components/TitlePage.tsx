import React from 'react';
import {HeadingBar} from './shared/HeadingBar';
import {Details} from './shared/Details';
import styled from 'styled-components';

export function TitlePage(): JSX.Element {
  return (
    <>
      <TitleWrapper>
        <h1 className="small-upper">Date of Issue </h1>
        <p className="small-upper grey">
          {new Date().toISOString().slice(0, 10)}
        </p>
      </TitleWrapper>
      <HeadingBar className="inline-hr" />
      <NameWrapper>
        <NameWrapperInner>
          <h2>Inspection Report</h2>
          <h2>Title Insert Here &#40;Max. Word&#41;</h2>
        </NameWrapperInner>
        <TitleThumbnailPlaceholder />
      </NameWrapper>
      <TitleImagePlaceholder />
      <Details
        titleData={{
          companyName: 'input',
          companyAddress: 'input',
          reviewer: 'first and last name',
        }}
      />
    </>
  );
}

const TitleWrapper = styled.div`
  display: flex;
`;
const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NameWrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.3;
`;
const TitleThumbnailPlaceholder = styled.div`
  width: 1in;
  height: 1in;
  background: ${({theme}) => theme.colours.midBlack};
`;
const TitleImagePlaceholder = styled.div`
  width: 7.1in;
  height: 7.1in;
  margin: 0.2in 0;
  background: ${({theme}) => theme.colours.midBlack};
`;
