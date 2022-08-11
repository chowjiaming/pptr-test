import React from 'react';
import {HeadingBar} from './shared/HeadingBar';
import {Table} from './shared/Table';
import {data} from '../data/summaryTableData';
import {MediumImagePlaceholder} from '../styles/helpers';
// import styled from 'styled-components';

type Props = {
  tableType: 'pages' | 'links';
};

export function MarkupsSummary({tableType}: Props): JSX.Element {
  return (
    <>
      <h1>Markup Summary</h1>
      <HeadingBar />
      <MediumImagePlaceholder />
      <Table summaryTableData={{tableType, tableMarkup: data}} />
    </>
  );
}
