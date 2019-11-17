import {GetPostAction, POSTS_ACTION_TYPES} from "./types"
import {ISimplePost} from "../shared-interfaces"

export const getPosts = (posts: ISimplePost[]): GetPostAction=> ({
    type: POSTS_ACTION_TYPES.GET_POSTS,
    payload: posts
})