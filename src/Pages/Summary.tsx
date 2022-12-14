import React from 'react';
import {HeadingBar} from '../Components/HeadingBar';
import {LargeImagePlaceholder} from '../Components/helpers';
import styled from 'styled-components';

export function Summary(): JSX.Element {
  return (
    <>
      <h1 id="summary">Summary</h1>
      <HeadingBar />
      <SummaryImagePlaceholder />
      <SummaryImagePlaceholder />
    </>
  );
}

const SummaryImagePlaceholder = styled(LargeImagePlaceholder)`
  width: 7.1in;
  height: 4.75in;
`;
