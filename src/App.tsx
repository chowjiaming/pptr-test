import React from 'react';
import {TitlePage} from './components/TitlePage';
import {MarkupsBySeverity} from './components/MarkupsBySeverity';
import {MarkupsByCategory} from './components/MarkupsByCategory';
import {InspectionSummary} from './components/InspectionSummary';
import {MarkupsSummary} from './components/MarkupsSummary';
import {MarkupsDetails} from './components/MarkupDetails';
import {Summary} from './components/Summary';
// import {data} from './data/markupDetailData';

export function App(): JSX.Element {
  return (
    <>
      <TitlePage />
      <MarkupsBySeverity />
      <MarkupsByCategory />
      <InspectionSummary />
      <MarkupsSummary tableType="pages" />
      <MarkupsSummary tableType="links" />
      <MarkupsDetails />
      <Summary />
    </>
  );
}
