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
            {markupData.compareBy === 'severity' ? (
              <>
                <StyledTh scope="col">
                  {' '}
                  <h3 className="small-upper dark">Severity</h3>
                </StyledTh>
                <StyledTh scope="col">
                  <h3 className="small-upper dark">Category</h3>
                </StyledTh>
              </>
            ) : (
              <>
                <StyledTh scope="col">
                  <h3 className="small-upper dark">Category</h3>
                </StyledTh>
                <StyledTh scope="col">
                  <h3 className="small-upper dark">Severity</h3>
                </StyledTh>
              </>
            )}
            <StyledTh scope="col">
              <h3 className="small-upper dark">Count</h3>
            </StyledTh>
          </tr>
        </thead>
        <tbody>
          {markupData.tableMarkup.map((row, index) => {
            return (
              <tr key={index}>
                <StyledTd>{row.severity}</StyledTd>
                <StyledTd>{row.category}</StyledTd>
                <StyledTd>{row.count}</StyledTd>
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
