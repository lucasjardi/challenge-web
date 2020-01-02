<template>
    <section class="section">
        <h1 class="title">Posts</h1>
        <div v-if="postsLoaded">
            <post-item v-for="post in posts" :post="post" :key="post.id" @show-details="showDetails"></post-item>
        </div>
        <div v-else>
            Loading Posts...
        </div>

        <modal-post-details></modal-post-details>
    </section>
</template>

<script>
    import axios from 'axios'
    import PostItem from './post-item'
    import ModalPostDetails from './modal-post-details'
    import {api_endpoint, show_modal_code} from "../../consts";

    export default {
        components: {
            PostItem,
            ModalPostDetails
        },

        data(){
            return {
                posts: [],
                postsLoaded: false
            }
        },

        mounted(){
            this.fetchPosts()
                .then(posts=>{
                    this.posts = posts
                    this.postsLoaded = true
                })
                .catch(error=>alert(error))
        },

        methods: {
            fetchPosts(){
                return new Promise((resolve,reject)=>{
                    axios.get(api_endpoint + '/posts')
                        .then(res=>resolve(res.data))
                        .catch(error=>reject(error))
                })
            },
            showDetails(post){
                this.$emit(show_modal_code, post)
            }
        }
    }
</script>

<style scoped>

</style>