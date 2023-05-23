import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import { movies } from "./movies";

const store = new Vuex.Store({
  modules: {
    movies: movies,
  },
});
export default store;
