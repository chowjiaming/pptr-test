import React from 'react';
import styled from 'styled-components';
import {CompareMarkupData, SummaryTableData} from '../../interfaces';

type Props = {
  compareMarkupData?: CompareMarkupData;
  summaryTableData?: SummaryTableData;
};

export function Table({
  compareMarkupData,
  summaryTableData,
}: Props): JSX.Element {
  if (compareMarkupData) {
    return (
      <StyledTable>
        <thead>
          <tr>
            <StyledTh scope="col">
              <h3 className="small-upper grey">
                {compareMarkupData.tableType === 'severity'
                  ? 'Severity'
                  : 'Category'}
              </h3>
            </StyledTh>
            <StyledTh scope="col">
              <h3 className="small-upper grey">
                {compareMarkupData.tableType === 'severity'
                  ? 'Category'
                  : 'Severity'}
              </h3>
            </StyledTh>
            <StyledTh scope="col">
              <h3 className="small-upper grey">Count</h3>
            </StyledTh>
          </tr>
        </thead>
        <tbody>
          {compareMarkupData.tableMarkup.map((row, index) => {
            return (
              <tr key={index}>
                <StyledTd>
                  <p className="small-upper dark">
                    {compareMarkupData.tableType === 'severity'
                      ? row.severity
                      : row.category}
                  </p>
                </StyledTd>
                <StyledTd>
                  <p className="small-upper dark">
                    {compareMarkupData.tableType === 'severity'
                      ? row.category
                      : row.severity}
                  </p>
                </StyledTd>
                <StyledTd>
                  <p className="small-upper dark">{row.count}</p>
                </StyledTd>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    );
  } else if (summaryTableData) {
    return (
      <StyledTable>
        <thead>
          <tr>
            <StyledTh scope="col">
              <h3 className="small-upper grey">
                {summaryTableData.tableType === 'pages' ? 'Page No.' : 'ID.'}
              </h3>
            </StyledTh>
            <StyledTh scope="col">
              <h3 className="small-upper grey">
                {summaryTableData.tableType === 'pages' ? 'ID.' : 'Category'}
              </h3>
            </StyledTh>
            <StyledTh scope="col">
              <h3 className="small-upper grey">
                {summaryTableData.tableType === 'pages'
                  ? 'Category'
                  : 'Severity'}
              </h3>
            </StyledTh>
            <StyledTh scope="col">
              <h3 className="small-upper grey">
                {summaryTableData.tableType === 'pages' ? 'Severity' : 'Links'}
              </h3>
            </StyledTh>
          </tr>
        </thead>
        <tbody>
          {summaryTableData.tableMarkup.map((row, index) => {
            return (
              <tr key={index}>
                <StyledTd>
                  <p className="small-upper dark">
                    {summaryTableData.tableType === 'pages'
                      ? row.pageNumber
                      : row.id}
                  </p>
                </StyledTd>
                <StyledTd>
                  <p className="small-upper dark">
                    {summaryTableData.tableType === 'pages'
                      ? row.id
                      : row.category}
                  </p>
                </StyledTd>
                <StyledTd>
                  <p className="small-upper dark">
                    {summaryTableData.tableType === 'pages'
                      ? row.category
                      : row.severity}
                  </p>
                </StyledTd>
                <StyledTd>
                  {summaryTableData.tableType === 'pages' ? (
                    <p className="small-upper dark">{row.severity}</p>
                  ) : (
                    <a className="text-link" href={row.link} target="_blank">
                      {row.link}
                    </a>
                  )}
                </StyledTd>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    );
  } else {
    return <></>;
  }
}

const StyledTable = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
`;
const StyledTh = styled.th`
  padding: 0.1in 0;
  border-bottom: 1px solid ${({theme}) => theme.colours.midBlack};
`;
const StyledTd = styled.td`
  padding: 0.1in 0;
  border-bottom: 1px solid ${({theme}) => theme.colours.midBlack};
`;
