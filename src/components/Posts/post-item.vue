<template>
    <article class="media is-clickable" @click="$emit('show-details',post)">
        <div class="media-content">
            <div class="content">
                <p>
                    <strong>#{{post.id}} - {{post.title}}</strong>
                    <br>
                    {{post.body|limit}}
                </p>
            </div>
        </div>
        <div class="media-right">
            <a href="" @click.prevent.stop="$emit('edit-post',post)">Edit</a>
        </div>
    </article>
</template>

<script>
    export default {
        props: {
            post: {
                type: Object,
                default: ()=>{},
            }
        },
        filters: {
            limit: function (text) {
                return text.substr(0,50) + ' ...'
            }
        }
    }
</script>

<style>
    .is-clickable{
        cursor: pointer;
    }
</style>