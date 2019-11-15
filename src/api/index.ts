import axios from "axios"
import {GetArticleRes, GetArticlesRes} from "../shared-interfaces"

const LOCAL_HOST_URL = "http://localhost:3004"

const baseApi = axios.create({
    baseURL: LOCAL_HOST_URL,
    timeout: 2000
})

export const tubesdayApi = {
    getPost: async (postId: number): Promise<GetArticleRes> => {
        const res = await baseApi.get(`posts/${postId}`)
        return res
    },
    getAllPosts: async (): Promise<GetArticlesRes> => {
        const res = await baseApi.get("posts")
        return res
    }
}