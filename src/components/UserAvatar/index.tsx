import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

export const EMPTY_PHOTO_URL =
  'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg';
export const IMAGE_BASE_URL = 'http://localhost:5000';

interface IProps {
  avatar?: string | undefined;
}

const UserAvatar = ({ avatar }: IProps) => {
  const avatarUrl = React.useMemo<string>(() => {
    return `http://localhost:5000/${avatar}`;
  }, [avatar]);
  return <Image source={{ uri: avatarUrl }} style={styles.avatar} />;
};

export default UserAvatar;
