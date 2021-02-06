<template>
  <div>
    <NoteItem
      v-for="(note, index) in notes"
      :key="note.title" :note="note"
      :index="index"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import NoteItem from '@/components/NoteItem.vue';
import { Note } from '@/types/Note';

export default defineComponent({
  name: "NotesList",
  components: {
    NoteItem,
  },
  setup() {
    const store = useStore();

    const notes = computed<Note[]>(() => store.state.notes);

    return { notes };
  }
})
</script>

<style lang="scss" scoped>

</style>