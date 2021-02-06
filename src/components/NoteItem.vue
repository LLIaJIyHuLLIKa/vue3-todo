<template>
  <div class="note-wrapper">
    <div class="note-wrapper__content">
      <h3>{{ note.title }}</h3>
      <p>{{ note.content }}</p>
    </div>
    <div class="note-wrapper__icon">
      <font-awesome-icon @click="DeleteNote" icon="trash" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useStore } from 'vuex';
  import { Note } from '@/types/Note';

  export default defineComponent({
    name: "NoteItem",
    props: {
      note: Object as () => Note,
      index: Number,
    },
    setup(props) {
      const store = useStore();
      const DeleteNote = (): void => {
        store.dispatch('DeleteNote', props.index);
      };

      return { DeleteNote };
    },
  });
</script>

<style lang="scss" scoped>
  .note-wrapper {
    width: 100%;
    background-color: #acb5bd;
    border-radius: 8px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__icon {
      svg {
        color: #ff0000;
        cursor: pointer;
      }
    }
  }
</style>