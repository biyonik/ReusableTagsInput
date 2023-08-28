<template>
  <main class="tags-input-wrapper">
    <span class="tag-item" v-for="(tag, index) in tags" v-bind:key="index">
      {{ `${index + 1} : ${tag}` }}

      <a class="remove-tag" href="#" @click.prevent="removeTag(index)">&times;</a>
    </span>
    <input
      type="text"
      v-model.trim="newTag"
      @keydown.enter.tab.prevent="addNewTag()"
      @keydown.delete="removeLastTag()"
      class="tag-input"
      :class="{
        'tag-exists': isTagDuplicate,
      }"
    />
  </main>
</template>

<script src="./script"></script>
<style scoped src="./style.css"></style>
