import React from "react"
import { View, Text, Button } from "react-native"
import { withNavigation } from "react-navigation";

interface IProps {
    children: React.ReactNode;
    navigation: any;
}

const CreatePost: React.FC<IProps> = props => {
    return (
        <View>
            <Text>Create Post</Text>
            <Button title="Back" onPress={() => props.navigation.navigate('Home')} />
        </View>
    )
}

export default withNavigation(CreatePost)