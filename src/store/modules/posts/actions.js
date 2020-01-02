import axios from 'axios'
import * as mutations from '../../mutation-types'
import * as actions from '../../action-types'
import * as consts from '../../../consts'

export default {
    [ actions.GET_POSTS ] (context) {
        return new Promise((resolve, reject) => {
            axios.get(consts.api_endpoint + '/posts')
                .then(response => {
                    context.commit(mutations.POSTS, response.data)
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
        })
    }
}
