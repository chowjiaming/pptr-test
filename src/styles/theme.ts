enum Colours {
  brand = 'hsl(189.1,100%,52%)',
  midnight = '#19233e',
  royal = 'hsl(210, 92%, 42%)',
  royalLight = 'hsl(210, 92%, 57%)',
  stop = 'hsl(0, 79%, 58%)',
  stopLight = 'hsl(0, 79%, 63%)',
  stopLow = 'hsl(0, 79%, 63%,0.2)',
  apple = 'hsl(145, 63%, 42%)',
  appleLight = 'hsl(145, 63%, 47%)',
  carrot = 'hsl(28, 80%, 47%)',
  carrotLight = 'hsl(28, 80%, 57%)',
  sunflower = 'hsl(48, 89%, 50%)',
  sunflowerLight = 'hsl(48, 89%, 60%)',
  mineShaft = '#444444',
  dustyGrey = '#AAAAAA',
  aluminum = 'hsl(0, 0%, 90%)',
  concrete = '#F5F5F5',
  midBlack = 'hsla(0, 0%, 0%, 0.5)',
  heavyWhite = 'hsla(0, 0%, 100%, 0.9)',
  midWhite = 'hsla(0, 0%, 100%, 0.7)',
  lightWhite = 'hsla(0, 0%, 100%, 0.3)',
  transparent = 'transparent',
}
enum FontFamilies {
  heading = 'Lato, Helvetica, Arial, sans-serif',
  body = 'Heebo, Helvetica, Arial, sans-serif',
}

export interface QiiTheme {
  fontFamilies: typeof FontFamilies;
  colours: typeof Colours;
  transition: '200ms ease';
  boxShadows: [
    '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
  ];
  gradient: 'linear-gradient(90deg, #096bcf 0%, #0adaff 100%)';
  gradientReverse: 'linear-gradient(270deg, #096bcf 0%, #0adaff 100%)';
}

export const theme: QiiTheme = {
  fontFamilies: FontFamilies,
  colours: Colours,
  transition: '200ms ease',
  boxShadows: [
    '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  ],
  gradient: 'linear-gradient(90deg, #096bcf 0%, #0adaff 100%)',
  gradientReverse: 'linear-gradient(270deg, #096bcf 0%, #0adaff 100%)',
};
