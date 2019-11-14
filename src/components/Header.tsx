import React from 'react';
import { View, Text, Animated } from 'react-native';
import { withNavigation } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Ionicons'

interface IProps {
  style: { opacity: any };
  navigation: any;
}

const Header: React.FC<IProps> = props => {
  return (
    <Animated.View
      style={{
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: "row",
        flex: 1,
        backgroundColor: 'red',
        opacity: props.style.opacity || 1,
      }}>
      <Text><Icon name="ios-menu" size={30} color="white" /></Text>
      <Text
        onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}
        style={{
          fontSize: 24,
          color: 'white',
          letterSpacing: 4,
          textAlign: 'center',
        }}>
        TUBESDAY

      </Text>
      <Text>
        <Icon name="ios-search" size={30} color="white" />
      </Text>
    </Animated.View>
  );
};

export default withNavigation(Header);
