<template>
  <div class="container">
    <AddNote />
    <NotesList />
  </div>
</template>

<script lang="ts">
import AddNote from '@/components/AddNote.vue';
import NotesList from '@/components/NotesList.vue';

export default {
  name: 'App',
  components: {
    AddNote,
    NotesList,
  }
};
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .container {
    max-width: 1170px;
    margin: 0 auto;
  }
</style>
