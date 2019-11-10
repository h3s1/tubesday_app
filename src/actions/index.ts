import {GetPostAction, POSTS_ACTION_TYPES} from "./types"
import {IPosts} from "../shared-interfaces"

export const getPosts = (posts: IPosts): GetPostAction=> ({
    type: POSTS_ACTION_TYPES.GET_POSTS,
    payload: posts
})