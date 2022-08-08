import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @media print {
    @page {
      size: A4 portrait;
      margin: 0.5in;
    }
  }
  /* start new page at each h1 */
  h1 {
    page-break-before: always;
  }
  /* avoid page break after subheading */
  h1,
  h2,
  h3,
  h4,
  h5 {
    page-break-after: avoid;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    margin: 0.1in 0 0 0;
  }
  /* keep tables on one page */
  table,
  figure {
    page-break-inside: avoid;
  }

  *, *::before, *::after { 
    box-sizing: border-box;
  }

  html {
    font-weight:400;
    color: ${({theme}) => theme.colours.mineShaft};
    font-family: ${({theme}) => theme.fontFamilies.body};
    font-size: 1rem;
    line-height: 1.4em;
  }
  img {
    max-width: 100%;
    vertical-align: bottom;
  }
  a {
    color: inherit;
    text-decoration: none;
    -webkit-appearance: none;
  }
  input {
    color: inherit;
  }

  .supertitle {
    font-size: 2em;
    line-height: 1.4em;
    word-wrap: break-word;
    word-break: break-word;
    hyphens: all;
  }
  .headline {
    font-weight: 700;
    font-family: ${({theme}) => theme.fontFamilies.heading};
    color: ${({theme}) => theme.colours.mineShaft};
    font-size: 1.75rem;
    line-height: 1.2em;
  }
  .subtitle {
    font-weight: 700;
    font-family: ${({theme}) => theme.fontFamilies.body};
    color: ${({theme}) => theme.colours.mineShaft};
    font-size: 1.4rem;
    line-height: 1.4em;
  }
  .super-title {
    font-weight: 700;
    font-family: ${({theme}) => theme.fontFamilies.body};
    color: ${({theme}) => theme.colours.mineShaft};
    font-size: 4rem;
    line-height: 1em;
  }
  .small-headline {
    font-weight: 700;
    font-family: ${({theme}) => theme.fontFamilies.body};
    color: ${({theme}) => theme.colours.royal};
    font-size: 1.4rem;
    line-height: 1.4em;
  }
  .small-upper {
    font-weight: 700;
    font-family: ${({theme}) => theme.fontFamilies.body};
    color: ${({theme}) => theme.colours.mineShaft};
    font-size: 0.8rem;
    line-height: 1.4em;
    text-transform: uppercase;
  }
  .small-upper.light {
    color: ${({theme}) => theme.colours.heavyWhite};
  }
  .small-upper.grey {
    color: ${({theme}) => theme.colours.midBlack};
  }
  .small-upper.dark {
    color: ${({theme}) => theme.colours.mineShaft};
  }

  .text-link {
    color: ${({theme}) => theme.colours.royal};
    font-weight: 700;

    &:hover {
      color: ${({theme}) => theme.colours.brand};
    }
  }
`;
