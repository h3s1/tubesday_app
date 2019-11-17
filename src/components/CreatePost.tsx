import React from "react"
import { View, Text, Button, TextInput, FlatList, Image, Dimensions } from "react-native"
import { connect } from 'react-redux'
import { withNavigation } from "react-navigation";
import _ from "lodash"
import { AppState } from "../actions/types"
import { ISimplePost } from "../shared-interfaces"
import uuidv1 from "uuid/v1"

const { width, height } = Dimensions.get('screen')
const imageSize = {
    width: width * 0.9,
    height: width * 0.5565 * 0.9
}

console.log(imageSize.height)

interface IProps {
    children: React.ReactNode;
    navigation: any;
    posts: ISimplePost[]
}

const CreatePost: React.FC<IProps> = props => {
    const [title, onChangeText] = React.useState()
    const [posts, setPostListState] = React.useState()

    React.useEffect(() => {
        setPostListState(props.posts)
    }, []);



    return (
        <View style={{ display: "flex", alignItems: "center", flex: 1 }}>
            <TextInput
                placeholder="제목 검색"
                onChangeText={text => onChangeText(text)} style={{ width: "90%", marginTop: 50, height: 40, backgroundColor: "#eee", borderRadius: 4 }}
            >
            </TextInput>
            <FlatList
                style={{ flex: 1, width: imageSize.width }}
                data={posts}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }: { item: any }) => (
                    <View style={{ marginTop: 10 }}>
                        <Image
                            style={{ width: imageSize.width, height: imageSize.height }}
                            resizeMode="cover"
                            source={{ uri: `https://img.youtube.com/vi/${item.video_id}/0.jpg` }}
                        ></Image>
                        <Text style={{ color: 'black', fontSize: 20 }}>{item.title}</Text>
                        <Text>{item.content}</Text>
                    </View>
                )}
            />
            <Button title="완료" onPress={() => props.navigation.navigate('Home')} />

        </View>
    )
}

export default connect((state: AppState) => ({ posts: state.postList.posts }))(withNavigation(CreatePost))