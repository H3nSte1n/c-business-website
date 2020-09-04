<template>
  <div>
    <hr>
    <v-container class="pa-0">
      <v-row
        justify="center"
        class="footer"
      >
        <v-col
          cols="11"
          md="6"
          lg="6"
          xl="5"
        >
          <v-row class="mt-4">
            <v-col
              cols="12"
              md="7"
              xl="6"
            >
              <p class="body-1 font-weight-medium">
                Persönlichkeitscoaching &
              </p>
              <p class="body-1 font-weight-medium">
                Unternehmenscoaching
              </p>
            </v-col>
            <v-col
              cols="12"
              sm="5"
              xl="4"
            >
              <p class="body-1 font-weight-medium">
                Claudia Eck
              </p>
              <p class="body-1 font-weight-medium">
                Samlandstraße 4
              </p>
              <p class="body-1 font-weight-medium">
                53225 Bonn
              </p>
            </v-col>
          </v-row>
          <v-row align="end">
            <v-col
              cols="12"
              md="7"
              xl="6"
            >
              <p class="body-1 font-weight-medium">
                Claudia Eck
              </p>
              <p class="body-1 font-weight-medium">
                Systemischer Coach
              </p>
              <p class="body-1 font-weight-medium">
                Dipl. Oecotrophologin
              </p>
            </v-col>
            <v-col
              cols="12"
              md="5"
              xl="4"
            >
              <p>
                <a
                  href="tel:01792 242543"
                  target="_blank"
                  class="body-1 font-weight-medium footer__button button"
                >+ 1792 242543</a>
              </p>
              <p>
                <a
                  href="mailto:info@claudiaeck.de"
                  target="_blank"
                  class="body-1 font-weight-medium footer__button button"
                >info@claudiaeck.de</a>
              </p>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          cols="11"
          md="6"
          lg="6"
          xl="5"
        >
          <v-row
            class="mt-4 justify-end"
            align="end"
          >
            <v-col class="footer__section-links">
              <v-row
                class="ml-auto pa-0"
              >
                <v-col class="d-flex justify-center">
                  <v-btn
                    icon
                    href="https://www.xing.com/"
                    class="button"
                    target="_blank"
                  >
                    <v-img
                      :src="require('~/assets/images/social-icons/facebook.svg')"
                      alt="facebook"
                      width="48px"
                    />
                  </v-btn>
                </v-col>
                <v-col class="d-flex justify-center">
                  <v-btn
                    icon
                    href="https://www.xing.com/"
                    class="button"
                    target="_blank"
                  >
                    <v-img
                      :src="require('~/assets/images/social-icons/twitter.svg')"
                      alt="twitter"
                      width="48px"
                    />
                  </v-btn>
                </v-col>
                <v-col class="d-flex justify-center">
                  <v-btn
                    icon
                    href="https://www.xing.com/"
                    class="button"
                    target="_blank"
                  >
                    <v-img
                      :src="require('~/assets/images/social-icons/xing.svg')"
                      alt="xing"
                      width="48px"
                    />
                  </v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="5"
                  class="text-left"
                >
                  <router-link
                    to="/impressum"
                    class="body-1 footer__button button"
                  >
                    Impressum
                  </router-link>
                </v-col>
                <v-col
                  cols="7"
                  class="text-right"
                >
                  <router-link
                    to="/datenschutz"
                    class="body-1 footer__button button"
                  >
                    Datenschutz
                  </router-link>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.footer {
  width: 100%;

  &__section-links {
    max-width: 230px;
  }

  &__button {
    color: $dark-2;
    text-decoration: none;
  }
}
</style>
