import styled from 'styled-components';

export const LargeImagePlaceholder = styled.div`
  width: 7.1in;
  height: 7.1in;
  margin: 0.2in 0;
  background: ${({theme}) => theme.colours.aluminum};
`;

export const MediumImagePlaceholder = styled.div`
  width: 7.1in;
  height: 4.5in;
  background: ${({theme}) => theme.colours.aluminum};
`;

export const SmallImagePlaceholder = styled.div`
  width: 2in;
  height: 2in;
  background: ${({theme}) => theme.colours.aluminum};
`;

export const ExtraSmallImagePlaceholder = styled.div`
  width: 1in;
  height: 1in;
  background: ${({theme}) => theme.colours.aluminum};
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FlexWrapper = {
  Row,
  Column,
};
