<template>
  <div class="sort">
    <div class="sort__check">
      <input
        type="radio"
        name="sortRadio"
        id="sort1"
        class="sort__check-input"
        value="Alph"
        @input="changeSort"
        v-model="sort"
      />
      <label class="sort__label" for="sort1"
        >отсортировать блоки по заголовку согласно алфавитного порядка</label
      >
    </div>

    <div class="sort__check">
      <input
        type="radio"
        name="sortRadio"
        id="sort2"
        class="sort__check-input"
        value="imgLeft"
        v-model="sort"
        @input="changeSort"
      />
      <label class="sort__label" for="sort2"
        >вывести все блоки в формате “изображения - слева, текст -
        справа”</label
      >
    </div>
    <div class="sort__check">
      <input
        type="radio"
        name="sortRadio"
        id="sort3"
        class="sort__check-input"
        value="Chess"
        v-model="sort"
        @input="changeSort"
      />
      <label class="sort__label" for="sort3"
        >вывести все блоки в формате “изображения - слева, текст - справа” и
        наоборот в шахматном порядке</label
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    sort: {
      type: String,
    },
  },

  methods: {
    changeSort(event) {
      this.$emit("sortBy", event.target.value);
    },
  },
};
</script>
<style scoped lang="scss">
.sort {
  margin: 0 auto 67px;
  max-width: 710px;

  &__label {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 64px;
    text-transform: lowercase;
    color: #000000;
    margin-left: 19px;
  }
}
</style>
