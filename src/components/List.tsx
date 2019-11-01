import React from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { IPosts, ISimplePost } from '../shared-interfaces';
import { tubesdayApi } from '../api';
import YouTube from 'react-native-youtube';
import Header from './Header';

interface Styles {
  wrapper: ViewStyle;
  title: TextStyle;
  author: TextStyle;
}

const List: React.FC = () => {
  //   const [count, setCount] = React.useState(0);
  const [posts, setPosts] = React.useState();
  // const [isReady, setReady] = React.useState(false);
  // const [status, setStatus] = React.useState();

  React.useEffect(() => {
    getPosts();
  },              []);

  const getPosts = async (): Promise<void> => {
    const res = await tubesdayApi.getAllPosts();
    setPosts(res.data);
  };

  return (
    <View style={{ flex: 1 }}>
      <Header style={{ flex: 1 }} />
      <View style={styles.wrapper}>
        <FlatList
          // style={{ flex: 8, backgroundColor: 'white' }}
          data={posts}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }: {item: any}) => (
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
          )}
        />
      </View>
      {/* <ScrollView>
        <Text>hi there</Text>
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create<Styles>({
  wrapper: {
    flex: 15,
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
