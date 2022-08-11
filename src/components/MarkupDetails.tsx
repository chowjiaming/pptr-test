import React from 'react';
import {HeadingBar} from './shared/HeadingBar';
import {Details} from './shared/Details';
import {Markups} from '../interfaces';

type Props = {
  markups: Markups[];
};

export function MarkupsDetails({markups}: Props): JSX.Element {
  return (
    <>
      <h1>Markups Details</h1>
      <HeadingBar />
      {markups.map((markupDetail) => {
        return <>{/* <Details details={markupDetail.details} /> */}</>;
      })}
    </>
  );
}
