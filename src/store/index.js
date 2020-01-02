import Vue from 'vue'
import Vuex from 'vuex'
import posts from './modules/posts'
import users from './modules/users'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        posts,
        users
    },
    strict: debug
})
