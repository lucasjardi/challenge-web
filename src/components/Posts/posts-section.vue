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
    import PostItem from './post-item'
    import ModalPostDetails from './modal-post-details'
    import { mapGetters } from 'vuex'
    import * as consts from '../../consts'
    import * as types from '../../store/action-types'

    export default {
        components: {
            PostItem,
            ModalPostDetails
        },

        mounted(){
            this.$store.dispatch(types.GET_POSTS)
        },

        methods: {
            showDetails(post){
                this.$emit(consts.show_modal_code, post)
            }
        },

        computed: {
            ...mapGetters([
                'posts',
            ]),
            postsLoaded(){
                return this.posts.length > 0
            }
        }
    }
</script>

<style scoped>

</style>