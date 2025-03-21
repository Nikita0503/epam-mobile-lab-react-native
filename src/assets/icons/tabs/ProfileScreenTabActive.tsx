import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ProfileScreenTabActive = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#6871EE"
      fillRule="evenodd"
      d="M1.5 12c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11Z"
      clipRule="evenodd"
    />
    <Path
      fill="#F8D94F"
      fillRule="evenodd"
      d="M17.447 7.053a1 1 0 0 1 .242 1.023l-2.12 6.36a1 1 0 0 1-.633.633l-6.36 2.12a1 1 0 0 1-1.265-1.265l2.12-6.36a1 1 0 0 1 .633-.633l6.36-2.12a1 1 0 0 1 1.023.242Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M17.447 7.053a1 1 0 0 1 .242 1.023l-2.12 6.36a1 1 0 0 1-.633.633l-6.36 2.12a1 1 0 0 1-1.265-1.265l2.12-6.36a1 1 0 0 1 .633-.633l6.36-2.12a1 1 0 0 1 1.023.242Zm-6.276 3.618-1.33 3.988 3.988-1.33 1.33-3.988-3.988 1.33Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ProfileScreenTabActive;
