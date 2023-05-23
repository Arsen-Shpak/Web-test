<template>
  <div>
    <div class="wrapper">
      <Swiper
        v-for="(color, id) in colorReverse"
        :key="color.id"
        :color="color.color"
        :index="currentInd"
        :isActiveButton="isActiveButton"
        @nextSlide="nextSlide"
        :class="`number${id}`"
      />
    </div>

    <Form />
    <Sort @sortBy="sortBy" :sort="sort" />
    <Movies
      v-for="(movie, ind) in listOfMovies"
      :key="movie.id"
      :movie="movie"
      :ind="ind"
    />
  </div>
</template>
<script>
import Form from "@/components/Form.vue";
import Swiper from "@/components/Swiper.vue";
import Movies from "@/components/Movies.vue";
import Sort from "@/components/Sort.vue";
import { gsap } from "gsap";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Form,
    Swiper,
    Movies,
    Sort,
  },

  data() {
    return {
      colors: [
        {
          id: 1,
          color: "green",
        },
        {
          id: 2,
          color: "lightGreen",
        },
        {
          id: 3,
          color: "grey",
        },
      ],
      colorReverse: [],
      currentInd: 1,
      isActiveButton: false,
      width: 768,
      sort: "",
    };
  },

  mounted() {
    this.colorReverse = this.colors.reverse();
    this.GET_MOVIES_FROM_API();
    console.log(this.MOVIES);
  },

  computed: {
    ...mapGetters({ MOVIES: "movies/MOVIES" }),

    moviesWithID() {
      const newMovies = this.MOVIES.map((item, ind, ar) => {
        return { ...item, ID: ind };
      });
      return newMovies.slice(0, 5);
    },

    listOfMovies() {
      switch (this.sort) {
        case "Alph":
          return [...this.moviesWithID].sort((movieA, movieB) =>
            movieA.original_title.localeCompare(movieB.original_title)
          );
        case "imgLeft":
          return [...this.moviesWithID].filter((movie, i) => {
            return i === 0 || i % 2 === 0;
          });
        default:
          return [...this.moviesWithID].slice(0, 5);
      }
    },
  },

  created() {
    addEventListener("resize", () => {
      this.width = innerWidth;
    });
  },

  methods: {
    ...mapActions({
      GET_MOVIES_FROM_API: "movies/GET_MOVIES_FROM_API",
    }),

    animation() {
      const ind = gsap.timeline();
      this.isActiveButton = true;
      ind.to(".slide:last-of-type", {
        x: -this.width,
        duration: 1,
        onComplete: () => {
          this.colorReverse.unshift(this.colorReverse.pop());
          // console.log(this.colorReverse);
          if (this.currentInd < 3) {
            this.currentInd++;
          } else {
            this.currentInd = 1;
          }
          ind.revert();
          this.isActiveButton = false;
        },
      });
    },

    nextSlide() {
      this.animation();
    },

    sortBy(newSort) {
      this.sort = newSort;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/mixins.scss";

.number0 {
  left: -1px;
}

.number1 {
  left: -19px;
  @include desktop {
    left: -37px;
  }
}

.number2 {
  left: -38px;
  @include desktop {
    left: -80px;
  }
}

.wrapper {
  position: relative;
  height: 900px;
  @include desktop {
    height: 708px;
  }
}
</style>
