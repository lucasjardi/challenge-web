<template>
    <section class="section">
        <h1 class="title">Posts</h1>
        <div v-if="postsLoaded">
            <post-item v-for="post in posts" :post="post" :key="post.id" @show-details="showDetails" @edit-post="editPost"></post-item>
        </div>
        <div v-else>
            Loading Posts...
        </div>

        <modal-post-details></modal-post-details>
        <modal-post-edit></modal-post-edit>
    </section>
</template>

<script>
    import PostItem from './post-item'
    import ModalPostDetails from './modal-post-details'
    import ModalPostEdit from './modal-post-edit'
    import { mapGetters } from 'vuex'
    import * as consts from '../../consts'
    import * as types from '../../store/action-types'

    export default {
        components: {
            PostItem,
            ModalPostDetails,
            ModalPostEdit
        },

        mounted(){
            this.$store.dispatch(types.GET_POSTS)
        },

        methods: {
            showDetails(post){
                this.$emit(consts.SHOW_MODAL_DETAILS, post)
            },
            editPost(post){
                this.$emit(consts.SHOW_MODAL_EDIT, post)
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