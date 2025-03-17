import * as React from 'react';
import Svg, {Circle, Defs, G, Path} from 'react-native-svg';

/* SVGR has dropped some elements not supported by react-native-svg: filter */
const MapMarkerSvgImage = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={34}
    fill="none"
    {...props}>
    <G filter="url(#a)">
      <Path
        fill="#6871EE"
        d="M25.067 18.297c-4.784 8.43-19.602 9.086-19.602 9.086S-.28 14.345 5.085 5.781C8.54.263 15.814-1.409 21.332 2.047c5.519 3.457 7.19 10.732 3.734 16.25Z"
      />
      <Circle
        cx={15.076}
        cy={12.039}
        r={8.421}
        fill="#fff"
        transform="rotate(32.06 15.076 12.039)"
      />
      <Path
        fill="#6871EE"
        d="m19.044 7.42 2.037 2.038-6.992 6.991-2.037-2.037z"
      />
      <Path
        fill="#F8D94F"
        d="m11.645 9.93 2.037 2.037-2.037 2.038-2.037-2.038z"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default MapMarkerSvgImage;
