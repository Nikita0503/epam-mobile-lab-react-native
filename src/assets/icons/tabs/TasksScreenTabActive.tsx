import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TasksScreenTabActive = (props: any) => (
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
    <Path fill="#fff" d="m16.073 8.373 1.978 1.978-6.788 6.788-1.978-1.978z" />
    <Path fill="#F8D94F" d="m8.89 10.81 1.978 1.978-1.978 1.978-1.978-1.978z" />
  </Svg>
);
export default TasksScreenTabActive;
