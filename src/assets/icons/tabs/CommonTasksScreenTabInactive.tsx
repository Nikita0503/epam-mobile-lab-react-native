import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CommonTasksScreenTabInactive = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#5E6178"
      fillRule="evenodd"
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z"
      clipRule="evenodd"
    />
    <Path
      fill="#5E6178"
      fillRule="evenodd"
      d="M8.797 13.396A1 1 0 0 0 7.2 14.6L8 14l-.8.6.001.001.001.002.003.004.007.009.021.027.07.086a6.942 6.942 0 0 0 1.171 1.08c.798.58 2 1.191 3.526 1.191 1.525 0 2.728-.61 3.526-1.191a6.936 6.936 0 0 0 1.17-1.08c.03-.035.053-.064.07-.086l.022-.027.007-.01.003-.003.001-.002S16.8 14.6 16 14l.8.6a1 1 0 0 0-1.597-1.204l-.005.006a3.709 3.709 0 0 1-.194.219 4.953 4.953 0 0 1-.655.57c-.577.42-1.374.809-2.349.809-.975 0-1.772-.39-2.35-.809a4.952 4.952 0 0 1-.815-.748 1.9 1.9 0 0 1-.034-.041l-.004-.006ZM8 9a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1ZM14 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default CommonTasksScreenTabInactive;
