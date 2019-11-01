import React from 'react';
import { View, Text } from 'react-native';

interface IProps {
  style: {flex: number};
}

const Header: React.FC<IProps> = props => {
  return (
    <View
      {...props.style}
      style={{
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
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
    </View>
  );
};

export default Header;
