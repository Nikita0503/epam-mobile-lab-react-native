import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';

const TaskActiveSvgImage = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}>
    <Rect width={16} height={16} fill="#fff" rx={4} />
    <Rect
      width={15}
      height={15}
      x={0.5}
      y={0.5}
      stroke="#484C53"
      strokeOpacity={0.2}
      rx={3.5}
    />
  </Svg>
);
export default TaskActiveSvgImage;
