import React from 'react';
import {TitlePage} from './Pages/TitlePage';
import {MarkupsBySeverity} from './Pages/MarkupsBySeverity';
import {MarkupsByCategory} from './Pages/MarkupsByCategory';
import {InspectionSummary} from './Pages/InspectionSummary';
import {MarkupsSummary} from './Pages/MarkupsSummary';
import {MarkupsDetails} from './Pages/MarkupDetails';
import {Summary} from './Pages/Summary';
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
