<template>
  <div :class="['slide', `${color}`]">
    <div class="slide__up">
      <img :src="EllipsePng" alt="EllipseUp" class="slide__up-img" />
      <p class="slide__up-text">lorem ipsum dolor sit amet</p>
      <!-- <p class="slide__up-text">LOREM IPSUM DOLOR SIT AMET</p> -->
    </div>
    <img :src="Dawn" alt="Dawn" class="slide__star" />
    <div class="slide__text">
      <h2 class="slide__text-first">lorem ipsum</h2>
      <h2 class="slide__text-second" style="margin-left: 43px">
        Lorem ipsum dolor —
      </h2>
      <h2 class="slide__text-second" style="margin-left: 236px">Lorem</h2>
      <h2 class="slide__text-second" style="margin-left: 114px">ipsum!</h2>
      <p class="slide__text-third">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
    </div>
    <img :src="Dog" alt="Dog" class="slide__dog" />
    <img :src="Ellipse" alt="Ellipse" class="slide__ellipse" />
    <img :src="WhiteEllipse" alt="WhiteEllipse" class="slide__whiteEllipse" />
    <button @click="nextSlide" :disabled="isActiveButton">
      <img :src="Arrow" alr="Arrow" class="slide__arrow"  />
    </button>
    <div class="slide__page">
      <p class="slide__page-number">{{ index }}/3</p>
    </div>
  </div>
</template>
<script>
// import EllipseUp from "@/images/EllipseUp.svg";
import Ellipse from "@/images/Ellipse.svg";
import EllipsePng from "@/images/Ellipse.png";
import Dawn from "@/images/Dawn.svg";
import Dog from "@/images/Dog.svg";
import WhiteEllipse from "@/images/WhiteEllipse.svg";
import Arrow from "@/images/Arrow.png";
export default {
  props: {
    color: {
      type: String,
    },
    index: {
      type: Number,
    },
    isActiveButton: {
      type:Boolean,
    }
    // id:{}
  },
  data() {
    return {
      // EllipseUp: EllipseUp,
      Ellipse: Ellipse,
      EllipsePng: EllipsePng,
      Dawn: Dawn,
      Dog: Dog,
      WhiteEllipse: WhiteEllipse,
      // color: `green`,
      Arrow: Arrow,
    };
  },
  // mounted() {
  //   console.log(this.id)
  // },
  methods: {
    nextSlide() {
      this.$emit("nextSlide");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/mixins.scss";
.slide {
  // background: #027D84;
  border-radius: 0px 60px 60px 0px;
  height: 900px;
  position: absolute;
  // position: relative;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  // margin-bottom:60px;
  @include desktop {
    height: 708px;
  }
  &__up {
    // background-image: url(../images/EllipseUp.svg);
    // background-repeat: no-repeat;
    // background-size: contain;
    &-text {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
      text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
      position: absolute;
      top: 12px;
      // z-index: 1;
      // left:330px;
      left: 42.97%;
      @include desktop {
        // left: 13.15%;
        left:18.7%;
        top: 18px;
      }
    }
    &-img {
      //       object-fit: contain;
      //       object-position:center;
      //       background: #AFB3B4;
      //       transform: rotate(13.28deg);
      //       height: 196.2756849110759px;
      // width: 378.098427605899px;
      // left: 258.10595703125px;

      object-fit: contain;
      -o-object-position: center;
      object-position: top;
      width: 378.1px;
      // width:49.23%;
      // width:48.23%;
      // left:251px;
      left: 32.68%;
      // left:270px;
      position: absolute;
      @include desktop {
        left:11.7%;
        width:464px;
      }
    }
  }
  &__star {
    position: absolute;
    top: 242px;
    left: -11px;
    object-fit: contain;
    width: 140px;
    // width:18.23%;
    height: 140px;
    @include desktop {
      width:160px;
      height:160px;
      top:357px;
      left:80px;
    }
  }
  &__text {
    // margin-top: 107px;
    padding-top: 107px;
    // margin-left: 120px;
    margin-left: 15.62%;
    @include desktop {
      // margin-left:13.19%;
      margin-left:16.1%;
      padding-top: 116px;
    }
    &-first {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 64px;
      text-transform: uppercase;
      color: #ffffff;

      @include desktop {
        font-size: 60px;
      }
    }
    &-second {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 52px;
      text-transform: uppercase;
      color: #ffffff;

      @include desktop {
        font-size: 60px;
        line-height: 70px;
      }
    }
    &-third {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 150%;
      text-transform: uppercase;
      color: #ffffff;
      max-width: 255px;
      margin-left: 286px;
    }
  }
  &__dog {
    object-fit: contain;
    object-position: center;
    width: 423.78px;
    height: 401.91px;
    position: absolute;
    bottom: 32px;
    // left:110px;
    left: 14.32%;
    // width:140px ;
    // height: 140px;
    z-index: 1;
    @include desktop {
      width: 508.54px;
      height: 482.29px;
      bottom:12px;
      left:49.51%;
    }
  }
  &__ellipse {
    object-fit: contain;
    object-position: center;
    width: 385.88px;
    /* width: 463px; */
    height: 200px;
    position: absolute;
    // left: 157px;
    // left: 214px;
    left: 27.86%;
    // bottom: 86px;
    bottom: 133px;
    /* transform: rotate(-15.23deg); */

    @include desktop {
      width: 463.06px;
      height: 240px;
      bottom:142.15px;
      left:58.13%;
    }
  }
  &__whiteEllipse {
    object-fit: contain;
    object-position: center;
    width: 459.68px;
    // height: 200px;
    position: absolute;
    // left: 123.48px;
    // right: 200.15px;
    // left: 146.175px;
    left: 19.03%;
    top: 441.3px;
    // bottom:258px;
    // border: 2px solid #FFFFFF;
    transform: rotate(-148.64deg);
    @include desktop {
      width:463px;
      transform: rotate(-140.36deg);
      top: 170px;
      height:240px;
      left:59.5%;
    }
  }
  &__page {
    // background-image: url(../images/WhiteEllipse.svg);
    // background-repeat: no-repeat;
    // border-radius: 50%;
    // border: 2px solid #FFFFFF;
    &-number {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 64px;
      display: flex;
      align-items: center;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;

      // border-bottom-left-radius: 50% 25%;
      // border-bottom-right-radius: 50% 25%;
      // border-top-left-radius: 50% 25%;
      // border-top-right-radius: 50% 25%;

      border-radius: 50%;
      border: 2px solid #ffffff;
      display: inline-block;
      padding: 1px 33px 1px 32px;
      position: absolute;
      // left:59px;
      left: 7.68%;
      bottom: 32px;

      @include desktop {
        font-size: 16px;
        left:22.01%;
        bottom:55px;
      }
    }
  }
  &__arrow {
    object-fit: contain;
    object-position: center;
    width: 120px;
    height: 120px;
    position: absolute;
    // left:620px;
    left: 80.73%;
    top: 421px;
    @include desktop {
      width: 120px;
      height:120px;
      top:294px;
      left:86.60%;
    }
  }
}
.green {
  // background-color: ;
  background: #027d84;
}
.lightGreen {
  background: #4a989a;
}

.grey {
  background: #afb3b4;
}

// .number1{
//   left:-10px;
// }
// .number2{
//   left:-20px;
// }
// .number3{
//   left:-30px;
// }
</style>
