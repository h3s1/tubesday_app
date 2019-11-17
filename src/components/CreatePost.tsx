import React from "react"
import { View, Text, Button, TextInput } from "react-native"
import { withNavigation } from "react-navigation";
import _ from "lodash"

interface IProps {
    children: React.ReactNode;
    navigation: any;
}

const CreatePost: React.FC<IProps> = props => {
    const [title, onChangeText] = React.useState()
    console.log(title)
    return (
        <View style={{ display: "flex", alignItems: "center" }}>
            <Text>Create Post</Text>
            <TextInput
                placeholder="제목 검색"
                onChangeText={text => onChangeText(text)} style={{ width: "90%", marginTop: 50, height: 40, backgroundColor: "#eee", borderRadius: 4 }}></TextInput>
            <Button title="완료" onPress={() => props.navigation.navigate('Home')} />

        </View>
    )
}

export default withNavigation(CreatePost)