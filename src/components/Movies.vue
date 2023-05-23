<template>
  <!-- <div class="movie"> -->
  <div :class="['movie', { left: leftOrRight, right: !leftOrRight }]">
    <!-- <img :src="movie.poster_path.slice(1)" alt="img" class="movie__img"> -->
    <img
      :src="require('@/images/' + movie.poster_path.slice(1))"
      alt="img"
      :class="['movie__img',{'movie__img-left':leftOrRight,'movie__img-right':!leftOrRight}]"
    />
    <!-- <h2>{{movie.poster_path}}</h2> -->
    <div :class="['movie__text',{ 'movie__text-left':leftOrRight, 'movie__text-right':!leftOrRight}]">
      <h2 class="movie__title">{{ movie.original_title }}</h2>
      <p class="movie__description">{{ movie.overview }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    movie: { type: Object },
    ind: { type: Number },
  },
  computed: {
    leftOrRight() {
      // return this.ind === 0 || this.ind % 2 === 0;
      return this.movie.ID === 0 || this.movie.ID % 2 === 0;
    },
  },
};
</script>
<style scoped lang="scss">
.movie {
  background: #c4c4c4;
  width: 1020px;
  height: 324px;
  display: flex;
  margin: 0 auto;
  margin-bottom: 37px;
  &__img {
    object-fit: contain;
    object-position: center;
    width: 380px;
    height: 264px;
    // margin-left: 32px;
    // margin-top: 28px;
    &-left{
      margin-left: 32px;
      margin-top: 28px;
    }
    &-right{
      margin-right: 40px;
      margin-top: 30px;
    }
  }
  &__text {
    margin-left: 54px;
    // margin-top: 95px;
    max-width: 500px;
    &-left{
      margin-top: 95px;
    }
    &-right{
      margin-top: 84px;
    }
  }
  &__title {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 64px;
    text-transform: lowercase;
    color: #000000;
    margin-bottom: 21px;
  }
  &__description {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
    text-transform: lowercase;
    color: #000000;
  }
}
.left {
  flex-direction: row;
}
.right {
  flex-direction: row-reverse;
}
</style>
