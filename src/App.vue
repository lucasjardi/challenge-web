<template>
  <div id="app">
    <div class="container">
      <posts-section></posts-section>
    </div>
  </div>
</template>

<script>
  import PostsSection from './components/Posts/posts-section'

  export default {
    components: {
      PostsSection
    }
  }
</script>