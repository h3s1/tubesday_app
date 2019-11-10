import React from 'react';
import { View, Text, Animated } from 'react-native';
import { withNavigation } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';

interface IProps {
  style: {opacity: any};
  navigation: any;
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
        onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}
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

export default withNavigation(Header);
