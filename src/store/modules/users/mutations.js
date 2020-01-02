import * as types from '../../mutation-types'

export default {
    [ types.USER ] (state, user) {
        state.user = user
    },
}
