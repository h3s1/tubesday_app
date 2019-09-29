// Color sets
import { Platform } from 'react-native';

export const typeIcon = {
  SUBWAY: 'ios-subway',
  BUS: 'md-bus',
  WALKING: 'md-walk',
  TAXI: 'local-taxi',
};

export const fonts = {
  spoqaHanSansBold:
    Platform.OS === 'ios' ? 'SpoqaHanSans-Bold' : 'Spoqa Han Sans Bold',
  spoqaHanSansLight:
    Platform.OS === 'ios' ? 'SpoqaHanSans-Light' : 'Spoqa Han Sans Light',
  spoqaHanSansRegular:
    Platform.OS === 'ios' ? 'SpoqaHanSans-Regular' : 'Spoqa Han Sans Regular',
  spoqaHanSansThin:
    Platform.OS === 'ios' ? 'SpoqaHanSans-Thin' : 'Spoqa Han Sans Thin',
};

export const colors = {
  defaultColor: '#000033',
  blackColor: '#222222',
  purpleBlueColor: '#000033',
  pastelBlueColor: '#25365d',
  greyColor: '#ccc',
  darkGreyColor: '#606060',
  redColor: '#f44336',
};

// sizes for media queries
const sizes = {
  desktop: 922,
  tablet: 768,
  phone: 576,
};

// font sizes
export const fontSize = {
  smallFontSize: '0.6rem',
  normalFontSize: '0.8rem',
  largeFontSize: '1.2rem',
  extraLargeFontSize: '2rem',
  superLargeFontSize: '3rem',
};

export const headerHeight = '3rem';

export const color = { bgColor: '#141414', fontColor: '#000' };
