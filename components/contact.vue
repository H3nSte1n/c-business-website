<template>
  <div class="contact">
    <v-container
      class="py-12"
    >
      <form
        action="/"
        method="post"
      >
        <v-row justify="center">
          <v-col
            cols="10"
            md="8"
          >
            <h3 class="contact__headline">
              {{ headline }}
            </h3>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col
            cols="10"
            md="8"
          >
            <p>{{ desc }}</p>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col
            cols="10"
            md="4"
          >
            <v-text-field
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
              v-model="user.content"
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
            >
              Senden
            </v-btn>
          </v-col>
        </v-row>
      </form>
    </v-container>
  </div>
</template>

<script>
export default {
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
        email: '',
        content: ''
      },
      headline: "Sie wollen durchstarten?",
      desc: "Lernen Sie mich ganz unverbindlich in einem ersten kostenfreien Gespräch kennen. All Ihre Fragen zum Coaching und der Vorgehensweise können Sie hier stellen. Erzählen Sie mir Ihr Anliegen und wir überlegen gemeinsam, wie wir starten können:"
    }
  }
}
</script>

<style scoped lang="scss">
.contact {
  background-color: #FFDA51;

  &__headline {
    font-size: 2rem;
    text-align: left;
    font-weight: 200;
  }
}
</style>
