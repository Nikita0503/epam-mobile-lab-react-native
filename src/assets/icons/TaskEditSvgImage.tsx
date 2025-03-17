import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

const TaskEditSvgImage = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#6871EE"
        fillRule="evenodd"
        d="M12.667 2.114a1.219 1.219 0 0 0-.862.357L2.93 11.346l-.647 2.37 2.37-.646 8.876-8.875a1.218 1.218 0 0 0-.862-2.08ZM11.69.975a2.553 2.553 0 0 1 2.781 4.163l-9 9a.667.667 0 0 1-.296.172l-3.666 1a.667.667 0 0 1-.819-.819l1-3.666a.667.667 0 0 1 .172-.296l9-9c.237-.237.518-.425.828-.554Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default TaskEditSvgImage;
