import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TasksScreenTabInactive = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#464963"
      fillRule="evenodd"
      d="M12.5 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-11 9c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11Z"
      clipRule="evenodd"
    />
    <Path
      fill="#464963"
      d="m16.073 8.373 1.978 1.978-6.788 6.788-1.978-1.978zM8.89 10.81l1.978 1.978-1.978 1.978-1.978-1.978z"
    />
  </Svg>
);
export default TasksScreenTabInactive;
