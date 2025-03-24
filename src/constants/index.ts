import { Platform } from 'react-native';

export const BASE_URL =
  Platform.OS === 'android'
    ? 'http://10.0.2.2:5000/api'
    : 'http://localhost:5000/api';
export const IMAGE_BASE_URL =
  Platform.OS === 'android' ? 'http://10.0.2.2:5000' : 'http://localhost:5000';
export const EMPTY_PHOTO_URL =
  'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg';
export const COMMON_TASKS_PER_PAGE = 10;
