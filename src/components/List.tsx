import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { IPosts, ISimplePost } from '../shared-interfaces';
import { tubesdayApi } from '../api';
import uuidv1 from 'uuid/v1';

const List: React.FC = () => {
  //   const [count, setCount] = React.useState(0);
  const [posts, setPosts] = React.useState();

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
          <View>
            <Text style={{ color: 'black' }}>{item.title}</Text>
            <Text>Hi there</Text>
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
