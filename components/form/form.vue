<template>
  <v-container
    class="py-12"
  >
    <v-form
      action="/"
      method="post"
      prevent-default="true"
    >
      <v-row :justify="headlinePos">
        <v-col
          cols="10"
          md="8"
        >
          <h3 class="contact__headline">
            {{ headline }}
          </h3>
        </v-col>
      </v-row>
      <v-row
        v-if="desc"
        justify="center"
      >
        <v-col
          cols="10"
          md="8"
          xl="8"
        >
          <p class="contact__desc">
            {{ desc }}
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
            class="required"
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
            class="required"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-center">
          <v-btn
            class="px-7 py-5 mt-9"
            outlined
            @click="submitForm"
          >
            Senden
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    headlinePos: {
      type: String,
      required: false,
      default: "center"
    }
  },
  data() {
    return {
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
      headline: "Sie wollen durchstarten?",
      desc: "Lernen Sie mich ganz unverbindlich in einem ersten kostenfreien Gespräch kennen. All Ihre Fragen zum Coaching und der Vorgehensweise können Sie hier stellen. Erzählen Sie mir Ihr Anliegen und wir überlegen gemeinsam, wie wir starten können:"
    }
  },
  methods: {
    submitForm() {
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
        this.$emit('status', true)
        //handle success
      })
      .catch(response => {
        //handle error
        this.$emit('status', false)
        console.log(response);
      });
    },
  }
}
</script>
