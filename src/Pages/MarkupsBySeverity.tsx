import React from 'react';
import {HeadingBar} from '../Components/HeadingBar';
import {Table} from '../Components/Table';
import {data} from '../data/tableData';
import {MediumImagePlaceholder} from '../Components/helpers';
// import styled from 'styled-components';

export function MarkupsBySeverity(): JSX.Element {
  return (
    <>
      <h1 id="markups-by-severity">Markups by Severity</h1>
      <HeadingBar />
      <MediumImagePlaceholder />
      <Table compareMarkupData={{tableType: 'severity', tableMarkup: data}} />
    </>
  );
}
