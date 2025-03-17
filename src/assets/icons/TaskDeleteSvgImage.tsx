import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const TaskDeleteSvgImage = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}>
    <Path
      fill="#6871EE"
      fillRule="evenodd"
      d="M1.333 4c0-.368.299-.667.667-.667h12a.667.667 0 1 1 0 1.334H2A.667.667 0 0 1 1.333 4Z"
      clipRule="evenodd"
    />
    <Path
      fill="#6871EE"
      fillRule="evenodd"
      d="M6.667 2A.667.667 0 0 0 6 2.667v.666h4v-.666A.667.667 0 0 0 9.333 2H6.667Zm4.666 1.333v-.666a2 2 0 0 0-2-2H6.667a2 2 0 0 0-2 2v.666H3.333A.667.667 0 0 0 2.667 4v9.333a2 2 0 0 0 2 2h6.666a2 2 0 0 0 2-2V4a.667.667 0 0 0-.666-.667h-1.334ZM4 4.667v8.666a.667.667 0 0 0 .667.667h6.666a.666.666 0 0 0 .667-.667V4.667H4Z"
      clipRule="evenodd"
    />
    <Path
      fill="#6871EE"
      fillRule="evenodd"
      d="M6.667 6.667c.368 0 .666.298.666.666v4a.667.667 0 1 1-1.333 0v-4c0-.368.298-.666.667-.666ZM9.333 6.667c.369 0 .667.298.667.666v4a.667.667 0 1 1-1.333 0v-4c0-.368.298-.666.666-.666Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default TaskDeleteSvgImage;
