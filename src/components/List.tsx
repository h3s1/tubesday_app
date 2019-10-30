import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { IPosts, ISimplePost } from '../shared-interfaces';
import { tubesdayApi } from '../api';

const List: React.FC = () => {
  //   const [count, setCount] = React.useState(0);
  const [posts, setPosts] = React.useState<IPosts | null>(null);

  React.useEffect(() => {
    getPosts();
  },              []);

  const getPosts = async (): Promise<void> => {
    const res = await tubesdayApi.getAllPosts();
    console.log(res.data);
    setPosts(res.data);
  };

  console.log(posts);

  return (
    <View>
      {/* <FlatList
        data={posts}
        renderItem={({item}: {item: any}) => <View key={item.id}><Text>{item.title}</Text></View>}
      ></FlatList> */}
    </View>
  );
};

export default List;
