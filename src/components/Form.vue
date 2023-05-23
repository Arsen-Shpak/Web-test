<template>
  <!-- <div> -->
  <form class="form" @submit.prevent="checkForm">
    <!-- Name:<input type="text" v-model="name"/> -->
    <div class="form__section">
      <h2 class="form__title" style="margin-bottom: 51px">
        Представьтесь, пожалуйста
      </h2>
      <div class="form__group" style="margin-bottom: 10px">
        <label class="form__label" for="surname">* Фамилия</label>
        <input
          id="surname"
          type="text"
          :class="['form__control', { isInvalid: $v.form.surname.$error }]"
          v-model="form.surname"
          required
        />
        <p v-if="$v.form.surname.$error" class="warn">Только кириллица</p>
      </div>
      <div class="form__group" style="margin-bottom: 16px">
        <label class="form__label" for="name">* Имя</label>
        <input
          id="name"
          type="text"
          :class="['form__control', { isInvalid: $v.form.name.$error }]"
          v-model="form.name"
          required
        />
        <p v-if="$v.form.name.$error" class="warn">Только кириллица</p>
      </div>
      <div class="form__group">
        <label class="form__label" for="jobTitle"
          >Организация и должность</label
        >
        <input
          id="jobTitle"
          type="text"
          :class="['form__control', { isInvalid: $v.form.jobTitle.$error }]"
          v-model="form.jobTitle"
        />
        <p v-if="$v.form.jobTitle.$error" class="warn">Только кириллица</p>
      </div>
      <div class="form__checkPart">
        <div class="form__check">
          <input
            type="radio"
            name="jobRadio"
            id="job1"
            class="form__check-input"
            value="Потребитель"
            v-model="form.jobTitle"
          />
          <label class="form__label" for="job1">Потребитель</label>
        </div>

        <div class="form__check">
          <input
            type="radio"
            name="jobRadio"
            id="job2"
            class="form__check-input"
            value="Медицинский работник"
            v-model="form.jobTitle"
          />
          <label class="form__label" for="job2">Медицинский работник</label>
        </div>
        <div class="form__check">
          <input
            type="radio"
            name="jobRadio"
            id="job3"
            class="form__check-input"
            value="Журналист"
            v-model="form.jobTitle"
          />
          <label class="form__label" for="job3">Журналист</label>
        </div>
      </div>
      <h2 class="form__title" style="margin-bottom: 18px">Сообщение</h2>
      <div class="form__group" style="margin-bottom: 22px">
        <label class="form__label" for="messageSubject">Тема сообщения</label>
        <input
          id="messageSubject"
          type="text"
          :class="[
            'form__control',
            { isInvalid: $v.form.messageSubject.$error },
          ]"
          v-model="form.messageSubject"
        />
        <p v-if="$v.form.messageSubject.$error" class="warn">
          Только кириллица
        </p>
      </div>
      <div class="form__group">
        <label class="form__label" for="messageSubject">* Сообщение</label>
        <textarea
          v-model="form.message"
          placeholder="textarea"
          :class="[
            'form__control',
            'textarea',
            { isInvalid: $v.form.message.$error },
          ]"
          required
        ></textarea>
        <p v-if="$v.form.message.$error" class="warn">
          Только кириллица или цифры
        </p>
      </div>
    </div>
    <div class="form__section">
      <h2 class="form__title" style="margin-bottom: 57px">
        Контактная информация
      </h2>
      <div class="form__group" style="margin-bottom: 17px">
        <label class="form__label" for="email">* Email</label>
        <input
          id="email"
          type="email"
          class="form__control"
          v-model="form.email"
          required
        />
        <!-- :class="['form__control', { 'isInvalid': $v.form.email.$error }]" -->
      </div>
      <div class="form__group" style="margin-bottom: 20px">
        <label class="form__label" for="country">Страна</label>
        <input
          id="country"
          type="text"
          :class="['form__control', { isInvalid: $v.form.country.$error }]"
          v-model="form.country"
        />
        <p v-if="$v.form.country.$error" class="warn">Только кириллица</p>
      </div>
      <div class="form__group" style="margin-bottom: 25px">
        <label class="form__label" for="city">Город</label>
        <input
          id="city"
          type="text"
          :class="['form__control', { isInvalid: $v.form.city.$error }]"
          v-model="form.city"
        />
        <p v-if="$v.form.city.$error" class="warn">Только кириллица</p>
      </div>
      <div class="form__group" style="margin-bottom: 27px">
        <label class="form__label" for="index">Индекс</label>
        <input
          id="index"
          type="number"
          :class="['form__control', { isInvalid: $v.form.index.$error }]"
          v-model="form.index"
        />
        <p v-if="$v.form.index.$error" class="warn">Только цифры</p>
      </div>
      <div class="form__group" style="margin-bottom: 23px">
        <label class="form__label" for="adress">Адрес</label>
        <input
          id="adress"
          type="text"
          :class="['form__control', { isInvalid: $v.form.adress.$error }]"
          v-model="form.adress"
        />
        <p v-if="$v.form.adress.$error" class="warn">Только кириллица</p>
      </div>
      <div class="form__group">
        <label class="form__label" for="phone">* Телефон</label>
        <input
          id="phone"
          type="tel"
          :class="['form__control', { isInvalid: $v.form.phone.$error }]"
          v-model="form.phone"
          required
        />
        <p v-if="$v.form.phone.$error" class="warn">
          Телефон формата +99(99)9999-9999
        </p>
      </div>
      <button type="submit" class="form__button">отправить</button>
    </div>
  </form>
  <!-- <h2>{{ name }}</h2> -->
  <!-- </div> -->
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, helpers } from "vuelidate/lib/validators";
// const alphaNumAndDotValidator = helpers.regex("alphaNumAndDot", /^[а-я\d.]*$/i);
// const numbers = helpers.regex("numbers", /^[0-9\.]*$/g, ``);
const numbers = helpers.regex("numbers", /^[0-9]+$/);
const alphaNumAndDotValidator = helpers.regex("alphaNumAndDot", /[А-Яа-я]+$/);
// const lettersAndNumbers = helpers.regex("lettersAndNumbers", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/);
const lettersAndNumbers = helpers.regex("lettersAndNumbers", /^[А-Яа-я0-9]+$/);
const phones = helpers.regex("phones", /[\+]\d{2}[\(]\d{2}[\)]\d{4}[\-]\d{4}/);
export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        surname: "",
        name: "",
        jobTitle: "",
        messageSubject: "",
        message: "",
        email: "",
        country: "",
        city: "",
        index: "",
        adress: "",
        phone: "",
      },
    };
  },
  validations: {
    form: {
      name: {
        required,
        alphaNumAndDotValidator,
      },
      surname: {
        required,
        alphaNumAndDotValidator,
      },
      jobTitle: {
        alphaNumAndDotValidator,
      },
      messageSubject: {
        alphaNumAndDotValidator,
      },
      city: {
        alphaNumAndDotValidator,
      },
      index: {
        numbers,
      },
      message: {
        required,
        lettersAndNumbers,
      },
      // email: {

      // },
      country: {
        alphaNumAndDotValidator,
      },
      adress: {
        alphaNumAndDotValidator,
      },
      phone: {
        phones,
      },
    },
  },
  methods: {
    checkForm() {
      this.$v.form.$touch();
      if (!this.$v.form.$error) {
        console.log("Валидация прошла успешно");
        alert("Отправлено");
        this.form = {
          surname: "",
          name: "",
          jobTitle: "",
          messageSubject: "",
          message: "",
          email: "",
          country: "",
          city: "",
          index: "",
          adress: "",
          phone: "",
        };
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/mixins.scss";

.form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  margin-top: 60px;
  margin-bottom: 80px;

  @include tablet {
    flex-direction: row;
    gap: 111px;
    // align-items: center;
  }
  &__section {
    // width: 17.08%;
    width: 100%;
    max-width: 246px;
  }
  &__title {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-transform: uppercase;
    color: #000000;
  }
  &__label {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    color: #000000;
  }
  &__control {
    border: 1px solid #000000;
    display: block;
    margin-top: 5px;
    width: 100%;
  }
  &__checkPart {
    margin-top: 14px;
    margin-bottom: 28px;
  }
  &__button {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    // line-height: 64px;
    text-transform: lowercase;
    color: #ffffff;
    background: #464646;
    border: 1px solid #000000;
    // padding-left: 75px;
    // padding-right:63px;
    width: 100%;
    margin-top: 51px;
  }
  &__check {
    &-input {
      margin-right: 10px;
    }
  }
}
.textarea {
  // width: 246px;
  height: 85px;
}
.isInvalid {
  border: 1px solid red;
  color: red;
}
.warn {
  color: red;
}
</style>
