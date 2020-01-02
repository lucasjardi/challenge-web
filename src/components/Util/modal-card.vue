<template>

    <div class="modal is-active">
        <div class="modal-background" @click="$emit('close')"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title"><slot name="title"></slot></p>
                <button type="button" class="delete" @click="$emit('close')"></button>
            </header>
            <section class="modal-card-body">
                <slot name="body"></slot>
            </section>
            <footer class="modal-card-foot footer-right">

                <slot name="custom"></slot>
                <slot name="footer">
                    <a class="button" v-if="!hideCanceled" @click="$emit('close')">Cancel</a>
                    <a class="button is-primary" @click="$emit('save')">Save</a>
                </slot>
            </footer>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            hideCanceled: {
                type: Boolean,
                default: false
            }
        },
    }

</script>

<style>
    .footer-right{
        justify-content: flex-end;
    }
</style>