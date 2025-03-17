import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const BackButtonSvgImage = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={16}
    fill="none"
    {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.5 15-7-7 7-7"
    />
  </Svg>
);
export default BackButtonSvgImage;
