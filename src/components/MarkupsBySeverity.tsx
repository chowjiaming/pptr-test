import React from 'react';
import {HeadingBar} from './shared/HeadingBar';
import {Table} from './shared/Table';
import styled from 'styled-components';

const data = [
  {severity: 'High', category: 'All', count: 2},
  {severity: 'High', category: 'Corrosion', count: 2},
  {severity: 'High', category: 'Improper Surface Finish', count: 2},
  {severity: 'High', category: 'Mechanical Damage', count: 2},
  {severity: 'High', category: 'Other', count: 2},
  {severity: 'Medium', category: 'All', count: 2},
  {severity: 'Low', category: 'All', count: 2},
  {severity: 'Low', category: 'Corrosion', count: 2},
  {severity: 'Low', category: 'Improper Surface Finish', count: 2},
];

export function MarkupsBySeverity(): JSX.Element {
  return (
    <>
      <h1>Markups by Severity</h1>
      <HeadingBar />
      <MarkupImagePlaceholder />
      <Table markupData={{compareBy: 'severity', tableMarkup: data}} />
    </>
  );
}

const MarkupImagePlaceholder = styled.div`
  width: 7.1in;
  height: 4.5in;
  background: ${({theme}) => theme.colours.midBlack};
`;
