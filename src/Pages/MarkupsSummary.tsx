import React from 'react';
import {HeadingBar} from '../Components/HeadingBar';
import {Table} from '../Components/Table';
import {data} from '../data/summaryTableData';
import {MediumImagePlaceholder} from '../Components/helpers';
// import styled from 'styled-components';

type Props = {
  tableType: 'pages' | 'links';
};

export function MarkupsSummary({tableType}: Props): JSX.Element {
  return (
    <>
      <h1 id="markup-summary">Markup Summary</h1>
      <HeadingBar />
      <MediumImagePlaceholder />
      <Table summaryTableData={{tableType, tableMarkup: data}} />
    </>
  );
}
