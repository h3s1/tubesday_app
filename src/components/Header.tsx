import React from 'react';
import { View, Text, Animated } from 'react-native';

interface IProps {
  style: {opacity: any};
}

const Header: React.FC<IProps> = props => {
  return (
    <Animated.View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'red',
        opacity: props.style.opacity || 1,
      }}>
      <Text
        style={{
          fontSize: 24,
          color: 'white',
          letterSpacing: 6,
          textAlign: 'center',
        }}>
        TUBESDAY
      </Text>
    </Animated.View>
  );
};

export default Header;
