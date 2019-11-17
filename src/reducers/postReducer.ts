import {PostListState, GetPostAction, POSTS_ACTION_TYPES} from "../actions/types"
import _ from "lodash"


export const initalState: PostListState= {posts: []}

export const postList = (state: PostListState = initalState, action: GetPostAction) => {

    const newState: PostListState = _.cloneDeep(state)
    switch (action.type) {
        case POSTS_ACTION_TYPES.GET_POSTS:
            return {posts: [...initalState.posts, ...action.payload]}
        default:
            return newState
    }
}