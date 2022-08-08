import React from 'react';
import {TitleData, MarkupData, ImageData} from '../../interfaces';
import styled from 'styled-components';

type Props = {
  titleData?: TitleData;
  markupData?: MarkupData;
  imageData?: ImageData;
};

export function Details(props: Props): JSX.Element {
  return (
    <>
      {props.titleData && (
        <>
          <FlexWrapper>
            <h3 className="small-upper">Company Name: </h3>
            <p className="small-upper dark">{props.titleData.companyName}</p>
          </FlexWrapper>
          <FlexWrapper>
            <h3 className="small-upper">Company Address: </h3>
            <p className="small-upper dark">{props.titleData.companyAddress}</p>
          </FlexWrapper>
          <FlexWrapper>
            <h3 className="small-upper">Reviwed By: </h3>
            <p className="small-upper dark">{props.titleData.reviewer}</p>
          </FlexWrapper>
        </>
      )}
    </>
  );
}

const FlexWrapper = styled.div`
  display: flex;
`;
