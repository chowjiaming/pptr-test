import React from 'react';
import {HeadingBar} from './shared/HeadingBar';
import {MarkupImagePlaceholder} from '../styles/helpers';

export function InspectionSummary(): JSX.Element {
  return (
    <>
      <h1>InspectionSummary</h1>
      <HeadingBar />
      <MarkupImagePlaceholder />
      <h2 className="small-upper grey">
        User Summary Input &#40;Max. Word&#41;
      </h2>
    </>
  );
}
