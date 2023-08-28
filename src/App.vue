<script>
  import TagsInput from './components/TagsInput/TagsInput.vue';

  export default {
    name: 'App',
    components: {
      TagsInput
    },
    data: () => ({
      selectedTags: []
    }),
    methods: {
      handleChange(tags) {
        this.selectedTags = [...tags];
      }
    }
  }
</script>

<template>
  <h1>Reusable Tags Input</h1>
  <div>{{selectedTags}}</div>
  <TagsInput v-bind:selected-tags="selectedTags" @changeTags="handleChange" />
</template>

<style scoped>
  h1 {
    color: sandybrown;
  }
</style>
