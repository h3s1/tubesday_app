import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { IPosts, ISimplePost } from '../shared-interfaces';
import { tubesdayApi } from '../api';
import uuidv1 from 'uuid/v1';
import YouTube from 'react-native-youtube';

const List: React.FC = () => {
  //   const [count, setCount] = React.useState(0);
  const [posts, setPosts] = React.useState();
  const [isReady, setReady] = React.useState(false);
  const [status, setStatus] = React.useState();

  React.useEffect(() => {
    getPosts();
  },              []);

  const getPosts = async (): Promise<void> => {
    const res = await tubesdayApi.getAllPosts();
    setPosts(res.data);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ flex: 1, backgroundColor: 'white' }}
        data={posts}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }: {item: any}) => (
          <View style={{ height: 300 }}>
            <YouTube
              videoId={item.video_id} // The YouTube video ID
              play={true} // control playback of video with true/false
              fullscreen={true} // control whether the video should play in fullscreen or inline
              loop={true} // control whether the video should loop when ended
              // onReady={e => setReady(true)}
              // onChangeState={e => this.setState({ status: e.state })}
              // onChangeQuality={e => this.setState({ quality: e.quality })}
              // onError={e => setStatus({ error: e.error })}
              style={{ alignSelf: 'stretch', flex: 6 }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ color: 'black', fontSize: 24 }}>{item.title}</Text>
              <Text style={{ color: 'black' }}>{item.author}</Text>
            </View>
          </View>
        )}
      />
      {/* <ScrollView>
        <Text>hi there</Text>
      </ScrollView> */}
    </View>
  );
};

export default List;
