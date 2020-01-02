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
                <p>Loading Responsible...</p>
            </template>
        </template>
        <template slot="footer">
            <button class="button is-primary" @click="close">Ok</button>
        </template>
    </modal-card>
</template>

<script>
    import axios from 'axios'
    import ModalCard from './../Util/modal-card'
    import UserDetails from './../Users/user-details'
    import {api_endpoint, show_modal_code, post, user} from "../../consts"

    export default {
        components: {
            ModalCard,
            UserDetails
        },
        data() {
            return {
                visible: false,
                userLoaded: false,
                post: post,
                user: user,
            }
        },
        mounted(){
            this.$parent.$on(show_modal_code, post=>{
                this.visible = true
                this.post = post
                this.getUser(post.userId)
                    .then(user=>{
                        this.user = user
                        this.userLoaded = true
                    })
                    .catch(error=>alert(error))
            })
        },
        methods: {
            getUser(userId){
                return new Promise((resolve,reject)=>{
                    axios.get(api_endpoint + '/users/' + userId)
                        .then(res=>resolve(res.data))
                        .catch(error=>reject(error))
                })
            },
            close(){
                this.visible = false
                this.userLoaded = false
                this.post = post
                this.user = user
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