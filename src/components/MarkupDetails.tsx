import React from 'react';
import {HeadingBar} from './shared/HeadingBar';
import {Details} from './shared/Details';
import {MarkupDetail} from '../interfaces';

type Props = {
  markupDetail: MarkupDetail[];
};

export function MarkupsDetails({markupDetail}: Props): JSX.Element {
  console.log(markupDetail);
  return (
    <>
      <h1>Markups Details</h1>
      <HeadingBar />
      {/* {markupDetail.map((markupDetail: MarkupDetail) => {
        return (
          <>
            
            <Details />
          </>
        );
      })} */}
    </>
  );
}
