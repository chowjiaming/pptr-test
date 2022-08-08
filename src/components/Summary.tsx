import React from 'react';
import {HeadingBar} from './shared/HeadingBar';
import {TitleImagePlaceholder} from '../styles/helpers';
import styled from 'styled-components';

export function Summary(): JSX.Element {
  return (
    <>
      <h1>Summary</h1>
      <HeadingBar />
      <SummaryImagePlaceholder />
      <SummaryImagePlaceholder />
    </>
  );
}

const SummaryImagePlaceholder = styled(TitleImagePlaceholder)`
  width: 7.1in;
  height: 4.75in;
`;
