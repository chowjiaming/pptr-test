import React from 'react';
import {DetailProps} from '../../interfaces';
import {FlexWrapper} from '../../styles/helpers';

type Props = {
  details: DetailProps[];
};

export function Details({details}: Props): JSX.Element {
  return (
    <>
      {details.map((detail, i) => {
        return (
          <FlexWrapper key={i}>
            <h3 className="small-upper">{detail.label + ':'}&nbsp;</h3>
            <p className="small-upper grey">{detail.value}</p>
          </FlexWrapper>
        );
      })}
    </>
  );
}
