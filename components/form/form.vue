<template>
  <v-container
    class="py-12"
  >
    <v-form
      ref="form"
      action="/"
      method="post"
      @submit.prevent="onSubmit"
    >
      <v-row justify="center">
        <v-col
          cols="10"
          :sm="smallHeadline ? '8' : '10'"
          :md="smallHeadline ? '6' : '8'"
          :lg="smallHeadline ? '5' : '8'"
          :xl="smallHeadline ? '4' : '8'"
        >
          <h3
            class="contact__headline"
            :class="{'contact__headline--center': centerHeadline}"
          >
            {{ content.headline }}
          </h3>
        </v-col>
      </v-row>
      <v-row
        v-if="content.desc"
        justify="center"
      >
        <v-col
          cols="10"
          md="8"
          xl="8"
        >
          <p class="contact__desc">
            {{ content.desc }}
          </p>
        </v-col>
      </v-row>
      <v-row
        justify="center"
        class="mt-4"
      >
        <v-col
          cols="10"
          md="4"
        >
          <v-text-field
            id="name"
            v-model="user.name"
            label="Name"
            type="text"
            hide-details="auto"
            :rules="contentRules"
            :validate-on-blur="true"
            class="required input-field"
          />
        </v-col>
        <v-col
          cols="10"
          md="4"
        >
          <v-text-field
            id="email"
            v-model="user.email"
            type="email"
            hide-details="auto"
            label="E-Mail Adresse"
            :validate-on-blur="true"
            :rules="emailRules"
            class="required input-field"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col
          cols="10"
          md="8"
        >
          <v-text-field
            id="msg"
            v-model="user.msg"
            label="Ihre Nachricht"
            type="text"
            hide-details="auto"
            :rules="contentRules"
            :validate-on-blur="true"
            class="required input-field"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <recaptcha
            @error="onError"
            @success="onSuccess"
            @expired="onExpired"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-center">
          <button
            class="px-7 mt-9 button"
            type="submit"
          >
            Senden
          </button>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import axios from 'axios'
import recaptcha from '@/mixins/recaptcha';
import InputfieldEvents from '@/mixins/inputfieldEvents';

export default {
  mixins: [recaptcha, InputfieldEvents],
  props: {
    centerHeadline: {
      type: Boolean,
      required: false,
      default: false
    },
    smallHeadline: {
      type: Boolean,
      required: false,
      default: false
    },
    content: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  data() {
    return {
      recaptchaSucceed: false,
      contentRules: [
        v => !!v || 'Pflichtfeld'
      ],
      emailRules: [
        v => !!v || 'Pflichtfeld',
        v => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-Mail Adresse muss gültig sein'
      ],
      user: {
        name: '',
        email: '',
        msg: ''
      },
    }
  },
  watch: {
    recaptchaSucceed() {
      this.submitForm();
    }
  },
  mounted() {
    this.initCursorEvents();
  },
  methods: {
    validate () {
      this.$refs.form.validate()
    },
    submitForm() {
      const valid = this.$refs.form.validate();
      if(!valid) { return false }
      const bodyFormData = new FormData();
      bodyFormData.set('name', this.user.name)
      bodyFormData.append('email', this.user.email)
      bodyFormData.append('msg', this.user.msg)
      axios.post('unternehmenscoaching', {
        name: this.user.name,
        email: this.user.email,
        msg: this.user.msg
      })
      .then( () => {
        //handle success
        this.$emit('status', true)
      })
      .catch(() => {
        //handle error
        this.$emit('status', false)
      });
    }
  }
}
</script>

<style lang="scss">
input {
  cursor: none;
}
</style>
