import React from 'react';
import {HeadingBar} from './shared/HeadingBar';
import {Table} from './shared/Table';
import {data} from '../data/tableData';
import {MarkupImagePlaceholder} from '../styles/helpers';
// import styled from 'styled-components';

export function MarkupsByCategory(): JSX.Element {
  return (
    <>
      <h1>Markups by Category</h1>
      <HeadingBar />
      <MarkupImagePlaceholder />
      <Table compareMarkupData={{tableType: 'category', tableMarkup: data}} />
    </>
  );
}
