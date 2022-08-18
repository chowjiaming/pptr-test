import React from 'react';
import {HeadingBar} from '../Components/HeadingBar';
import {Table} from '../Components/Table';
import {data} from '../data/tableData';
import {MediumImagePlaceholder} from '../Components/helpers';
// import styled from 'styled-components';

export function MarkupsByCategory(): JSX.Element {
  return (
    <>
      <h1 id="markups-by-category">Markups by Category</h1>
      <HeadingBar />
      <MediumImagePlaceholder />
      <Table compareMarkupData={{tableType: 'category', tableMarkup: data}} />
    </>
  );
}
