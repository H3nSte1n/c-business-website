<template>
  <Preload :loading="loading">
    <v-container fluid class="pa-0">
      <Header :content="header" />
      <Wrapper
        headline="Rufen Sie mich an"
        color="light-blue"
        class="text-center"
      >
        <a
          href="tel: 01792242543"
          class="kontakt__tel button button--transition"
        >01792242543</a>
      </Wrapper>
      <Contact
        :content="contact"
        :center-headline="true"
        :small-headline="true"
      />
    </v-container>
  </Preload>
</template>

<script>
import Header from '@/components/header/header';
import Contact from '@/components/form/contact';
import Wrapper from '@/components/container/wrapper';
import Preload from '@/components/global/preloader';
import ButtonEvents from '@/mixins/buttonEvents';
import PropertyMapping from '@/mixins/propertyMapping';

export default {
  components: {Header, Contact, Wrapper, Preload},
  mixins: [ButtonEvents, PropertyMapping],
  transition: "swipe",
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      const data = await this.$strapi.find('Contact');
      this.passHeaderData(data.Header);
      this.passContactData(data.Contact);
      this.loading = false;
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/colors.scss';
@import '@/scss/page_transition.scss';


.kontakt {
  &__tel {
    font-size: 3rem;
    color: $black;
    text-align: center;
    text-decoration: none;
  }
}
</style>
