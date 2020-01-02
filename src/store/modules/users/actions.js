import axios from 'axios'
import * as mutations from '../../mutation-types'
import * as actions from '../../action-types'
import * as consts from '../../../consts'

export default {
    [ actions.GET_USER ] (context, id) {
        return new Promise((resolve, reject) => {
            axios.get(consts.api_endpoint + '/users/' + id)
                .then(response => {
                    context.commit(mutations.USER, response.data)
                    resolve(response)
                }).catch(error => {
                reject(error)
            })
        })
    }
}
