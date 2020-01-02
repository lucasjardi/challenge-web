import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import {user} from "../../../consts";

const state = {
    user: user
}

export default {
    state,
    getters,
    actions,
    mutations
}
