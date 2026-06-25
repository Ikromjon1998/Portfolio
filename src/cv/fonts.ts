import { Font } from '@react-pdf/renderer';

const BASE = '/fonts';

Font.register({
  family: 'Space Grotesk',
  fonts: [
    { src: `${BASE}/SpaceGrotesk-Variable.ttf`, fontWeight: 400 },
    { src: `${BASE}/SpaceGrotesk-Variable.ttf`, fontWeight: 600 },
  ],
});

Font.register({
  family: 'IBM Plex Sans',
  fonts: [
    { src: `${BASE}/IBMPlexSans-Regular.ttf`, fontWeight: 400 },
    { src: `${BASE}/IBMPlexSans-Medium.ttf`, fontWeight: 500 },
  ],
});

Font.register({
  family: 'IBM Plex Mono',
  fonts: [
    { src: `${BASE}/IBMPlexMono-Regular.ttf`, fontWeight: 400 },
    { src: `${BASE}/IBMPlexMono-Medium.ttf`, fontWeight: 500 },
  ],
});

Font.registerHyphenationCallback((word) => [word]);
