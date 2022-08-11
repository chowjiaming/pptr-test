import styled from 'styled-components';

export const MarkupImagePlaceholder = styled.div`
  width: 7.1in;
  height: 4.5in;
  background: ${({theme}) => theme.colours.midBlack};
`;

export const TitleImagePlaceholder = styled.div`
  width: 7.1in;
  height: 7.1in;
  margin: 0.2in 0;
  background: ${({theme}) => theme.colours.midBlack};
`;

export const FlexWrapper = styled.div`
  display: flex;
`;
