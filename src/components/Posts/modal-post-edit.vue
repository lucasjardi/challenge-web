<template>
    <modal-card v-if="visible" @close="close" @save="save">
        <template slot="title">Edit</template>
        <template slot="body">
            <div class="field">
                <label class="label">Title</label>
                <div class="control">
                    <input class="input" v-model="post.title" type="text" placeholder="Title input">
                </div>
            </div>
            <div class="field">
                <label class="label">Body</label>
                <div class="control">
                    <textarea v-model="post.body" class="textarea" placeholder="Body..."></textarea>
                </div>
            </div>
        </template>
    </modal-card>
</template>

<script>
    import ModalCard from './../Util/modal-card'
    import * as consts from '../../consts'
    import * as mutations from '../../store/mutation-types'

    export default {
        components: {
            ModalCard,
        },
        data() {
            return {
                visible: false,
                post: consts.POST_DEFAULT,
            }
        },
        mounted(){
            this.$parent.$on(consts.SHOW_MODAL_EDIT, post=>{
                this.visible = true
                this.post = this.removeReactivity(post)
            })
        },
        methods: {
            save(){
                if(!this.post.title || !this.post.body) return
                this.$store.commit(mutations.UPDATE_POST, this.post)
                this.close()
            },
            close(){
                this.visible = false
            },
            removeReactivity(payload){
                return JSON.parse(JSON.stringify(payload))
            }
        },
    }
</script>