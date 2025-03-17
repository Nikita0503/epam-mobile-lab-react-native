import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

const TaskMapPointSvgImage = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    fill="none"
    style={{marginRight: 2}}
    {...props}>
    <G fill="#5E6178" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path d="M5 .833a3.333 3.333 0 0 0-3.333 3.334c0 1.29.84 2.543 1.76 3.515A12.261 12.261 0 0 0 5 9.072a12.261 12.261 0 0 0 1.573-1.39c.92-.972 1.76-2.224 1.76-3.515A3.333 3.333 0 0 0 5 .833Zm0 8.75-.231.347h-.002l-.002-.003-.01-.006a4.448 4.448 0 0 1-.16-.113 13.095 13.095 0 0 1-1.772-1.553C1.868 7.248.833 5.792.833 4.167a4.167 4.167 0 0 1 8.334 0c0 1.625-1.035 3.081-1.99 4.088a13.095 13.095 0 0 1-1.932 1.666l-.01.006-.002.002h-.001L5 9.584Zm0 0 .231.347a.417.417 0 0 1-.462 0L5 9.583Z" />
      <Path d="M5 3.333A.833.833 0 1 0 5 5a.833.833 0 0 0 0-1.667Zm-1.667.834a1.667 1.667 0 1 1 3.334 0 1.667 1.667 0 0 1-3.334 0Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h10v10H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default TaskMapPointSvgImage;
