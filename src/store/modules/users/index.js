import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import {USER_DEFAULT} from "../../../consts";

const state = {
    user: USER_DEFAULT
}

export default {
    state,
    getters,
    actions,
    mutations
}
