import * as types from '../../mutation-types'

export default {
    [ types.POSTS ] (state, posts) {
        state.posts = posts
    },
    [ types.UPDATE_POST ] (state, payload) {
        let index = state.posts.findIndex(post=>post.id === payload.id)
        state.posts.splice(index,1,payload)
    },
}
