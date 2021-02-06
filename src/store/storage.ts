import { createStore } from 'vuex';
import { Note } from '@/types/Note';

export default createStore({
  state: {
    notes: [] as Note[],
  },
  mutations: {
    SetNote(state, note: Note) {
      state.notes.push(note);
    },
    RemoveNote(state, index: number) {
      state.notes.splice(index, 1);
    }
  },
  actions: {
    AddNote({commit}, note: Note) {
      commit('SetNote', note);
    },
    DeleteNote({commit}, index: number) {
      commit('RemoveNote', index);
    },
  },
});
