import React from 'react';
import {HeadingBar} from '../Components/HeadingBar';
import {MediumImagePlaceholder} from '../Components/helpers';

export function InspectionSummary(): JSX.Element {
  return (
    <>
      <h1 id="inspection-summary">InspectionSummary</h1>
      <HeadingBar />
      <MediumImagePlaceholder />
      <h2 className="small-upper grey">
        User Summary Input &#40;Max. Word&#41;
      </h2>
    </>
  );
}
