<template>
  <div>
    <form @submit.prevent="AddNote">
      <label for="title">Название</label>
      <input v-model="form.title" id="title" placeholder="Введите название заметки...">
      <label for="content">Содержание</label>
      <input v-model="form.content" id="content" placeholder="Введите содержание заметки...">

      <button type="submit" :disabled="!validate" class="btn btn-success">Добавить заметку</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { Note } from '@/types/Note';

export default defineComponent({
  name: "AddNote",
  setup() {
    const store = useStore();

    const form = reactive({
      title: '' as string,
      content: '' as string,
    });
    const AddNote = (): void => {
      const newNote: Note = {
        title: form.title,
        content: form.content,
      };
      store.dispatch('AddNote', newNote);

      ResetForm();
    }
    const ResetForm = (): void => {
      form.title = '';
      form.content = '';
    }

    const validate = computed<Boolean>(() => {
      return !!(form.title && form.content);
    })

    return { form, AddNote, validate };
  }
});
</script>

<style lang="scss" scoped>
  label {
    color: #212429;
    font-size: 12px;
    line-height: 16px;
    margin: 5px 10px;
  }

  input {
    width: 100%;
    border: 0;
    border-bottom: 1px solid #acb5bd;
    padding: 8px;
    transition: 0.15s all linear;

    &:focus {
      border-bottom: 2px solid #212429;
      outline: none;
    }
  }

  button {
    margin-top: 10px;
  }
</style>