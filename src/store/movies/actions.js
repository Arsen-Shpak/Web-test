import axios from "axios";

export default {
  async GET_MOVIES_FROM_API({ commit }) {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=3685d3eb8695f087227e0ee980f3ae4d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1/results"
      );
      console.log(response.data)
      commit("SET_MOVIES_TO_STATE", response.data.results);
      return response.data;
    } catch (err) {
      alert("Error", err);
    }
  },
};
