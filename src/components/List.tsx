import React from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Animated,
  Dimensions,
} from 'react-native';
import { IPosts, ISimplePost } from '../shared-interfaces';
import { tubesdayApi } from '../api';
import YouTube from 'react-native-youtube';
import Header from './Header';

interface Styles {
  wrapper: ViewStyle;
  title: TextStyle;
  author: TextStyle;
  header: ViewStyle;
}
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('screen');
const HEADER_EXPANDED_HEIGHT = Math.min(60, Math.round(SCREEN_HEIGHT / 10));
const HEADER_COLLAPSED_HEIGHT = 0;

const List: React.FC = () => {
  //   const [count, setCount] = React.useState(0);
  const [posts, setPosts] = React.useState();
  const [scrollY, setScrollY] = React.useState(new Animated.Value(0));

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
    extrapolate: 'clamp',
  });
  const headerTitleOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  const heroTitleOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  // const [isReady, setReady] = React.useState(false);
  // const [status, setStatus] = React.useState();

  React.useEffect(() => {
    getPosts();
  },              []);

  const getPosts = async (): Promise<void> => {
    const res = await tubesdayApi.getAllPosts();
    setPosts(res.data);
  };

  function renderVideoList() {
    return posts.map((item: ISimplePost, idx: number) => {
      return (
        <View style={{ height: 400 }}>
          <YouTube
            videoId={item.video_id} // The YouTube video ID
            play={false} // control playback of video with true/false
            fullscreen={true} // control whether the video should play in fullscreen or inline
            loop={true} // control whether the video should loop when ended
            // onReady={e => setReady(true)}
            // onChangeState={e => this.setState({ status: e.state })}
            // onChangeQuality={e => this.setState({ quality: e.quality })}
            // onError={e => setStatus({ error: e.error })}
            style={{ alignSelf: 'stretch', flex: 2 }}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.author}>{item.author}</Text>
          </View>
        </View>
      );
    });
  }

  return (
    <View style={{ flex: 1 }}>
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <Header style={{ opacity: heroTitleOpacity }} />
      </Animated.View>
      <ScrollView
        scrollEventThrottle={16}
        // style={{ marginBottom: 20 }}
        contentContainerStyle={{
          // flexGrow: 1,
          // paddingBottom: 10,
          marginBottom: 10,
          paddingTop: HEADER_EXPANDED_HEIGHT,
          // marginBottom: 10
        }}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y: scrollY,
              },
            },
          },
        ])}>
        {posts ? renderVideoList() : null}
      </ScrollView>

   
    </View>
  );
};

const styles = StyleSheet.create<Styles>({
  wrapper: {
    flex: 15,
  },
  header: {
    position: 'absolute',
    flex: 1,
    width: SCREEN_WIDTH,
    top: 0,
    left: 0,
    zIndex: 9999,
  },
  title: {
    color: 'black',
    fontSize: 24,
    margin: 16,
    marginBottom: 0,
    marginTop: 24,
    letterSpacing: 2,
  },
  author: {
    color: 'black',
    margin: 16,
    marginTop: 4,
    fontSize: 16,
    // letterSpacing: 2,
  },
});

export default List;
