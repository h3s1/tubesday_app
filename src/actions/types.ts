import {IPosts, ISimplePost} from "../shared-interfaces"

export enum POSTS_ACTION_TYPES {
    UPDATE_POSTS = 'POSTS/UPDATE_POSTS',
    GET_POSTS = 'POSTS/GET_POSTS'
}

export type GetPostAction = {
    type: string,
    payload: ISimplePost[]
}

export type PostListState =  {
    posts: ISimplePost[]
}


export type AppState = {
    postList: PostListState,
}