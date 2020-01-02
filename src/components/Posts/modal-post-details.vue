<template>
    <modal-card v-if="visible" @close="close">
        <template slot="title">Details</template>
        <template slot="body">
            <p class="is-bold has-margin-bottom" v-text="post.title"></p>
            <p v-text="post.body"></p>
            <hr>
            <p class="is-bold">Responsible</p>
            <template v-if="userLoaded">
                <user-details :user="user"></user-details>
            </template>
            <template v-else>
                Loading responsible...
            </template>
        </template>
        <template slot="footer">
            <button class="button is-primary" @click="close">Ok</button>
        </template>
    </modal-card>
</template>

<script>
    import ModalCard from './../Util/modal-card'
    import UserDetails from './../Users/user-details'
    import { mapGetters } from 'vuex'
    import * as consts from '../../consts'
    import * as types from '../../store/action-types'
    import * as mutations from '../../store/mutation-types'

    export default {
        components: {
            ModalCard,
            UserDetails
        },
        data() {
            return {
                visible: false,
                post: consts.POST_DEFAULT,
            }
        },
        mounted(){
            this.$parent.$on(consts.SHOW_MODAL_DETAILS, post=>{
                this.visible = true
                this.post = post
                this.$store.dispatch(types.GET_USER, post.userId)
            })
        },
        methods: {
            close(){
                this.visible = false
                this.post = consts.POST_DEFAULT
                this.$store.commit(mutations.USER, consts.USER_DEFAULT)
            }
        },
        computed: {
            ...mapGetters([
                'user',
            ]),
            userLoaded(){
                return this.user.id !== ''
            }
        }
    }
</script>

<style scoped>
    .is-bold {
        font-weight: bold;
    }
    .has-margin-bottom {
        margin-bottom: 1rem;
    }
</style>