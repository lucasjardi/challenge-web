import * as types from '../../mutation-types'

export default {
    [ types.POSTS ] (state, posts) {
        state.posts = posts
    },
}
