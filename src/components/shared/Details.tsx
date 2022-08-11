import React from 'react';
import {DetailProps} from '../../interfaces';
import {FlexWrapper} from '../../styles/helpers';
import styled from 'styled-components';

type Props = {
  details: DetailProps[];
};

export function Details({details}: Props): JSX.Element {
  return (
    <DetailsWrapper>
      {details.map((detail, i) => {
        return (
          <FlexWrapper.Row key={i}>
            <h3 className="small-upper">{detail.label + ':'}&nbsp;</h3>
            <p className="small-upper grey">{detail.value}</p>
          </FlexWrapper.Row>
        );
      })}
    </DetailsWrapper>
  );
}

const DetailsWrapper = styled.div`
  margin-bottom: 0.2in;
`;
