import React from 'react';
import styled from 'styled-components';
import {MarkupTableData} from '../../interfaces';

type Props = {
  markupData: MarkupTableData;
};

export function Table({markupData}: Props): JSX.Element {
  return (
    <>
      <StyledTable>
        <thead>
          <tr>
            <StyledTh scope="col">
              <h3 className="small-upper grey">
                {markupData.compareBy === 'severity' ? 'Severity' : 'Category'}
              </h3>
            </StyledTh>
            <StyledTh scope="col">
              <h3 className="small-upper grey">
                {markupData.compareBy === 'severity' ? 'Category' : 'Severity'}
              </h3>
            </StyledTh>
            <StyledTh scope="col">
              <h3 className="small-upper grey">Count</h3>
            </StyledTh>
          </tr>
        </thead>
        <tbody>
          {markupData.tableMarkup.map((row, index) => {
            return (
              <tr key={index}>
                <StyledTd>
                  <p className="small-upper dark">
                    {markupData.compareBy === 'severity'
                      ? row.severity
                      : row.category}
                  </p>
                </StyledTd>
                <StyledTd>
                  <p className="small-upper dark">
                    {markupData.compareBy === 'severity'
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
    </>
  );
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
