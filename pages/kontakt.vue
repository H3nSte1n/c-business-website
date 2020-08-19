<template>
  <v-container fluid class="pa-0">
    <Header :content="header" />
    <Wrapper
      headline="Rufen Sie mich an"
      color="light-blue"
      class="text-center"
    >
      <a
        href="tel: 01792242543"
        class="kontakt__tel"
      >01792242543</a>
    </Wrapper>
    <Contact
      :content="content_contact"
      :center-headline="true"
      :small-headline="true"
    />
  </v-container>
</template>

<script>
import Header from '@/components/header';
import Contact from '@/components/form/contact';
import Wrapper from '@/components/wrapper';

export default {
  components: {Header, Contact, Wrapper},
  data() {
    return {
      header: {
        headline: 'Kontakt',
        desc: 'Hierüber können Sie mich erreichen',
        img: {
          src: require('~/assets/images/claudia-eck-persönlichkeitsentwicklung.svg'),
          alt: 'unternehmenscoaching'
        }
      },
      desc: 'Prima. Sie sind bereit einen ersten Schritt zu machen. Lernen Sie mich kennen und fragen Sie mich an – egal ob per Mail oder Telefon. Gerne können wir uns in einem ersten persönlichen Treffen oder Telefonat kennenlernen. All Ihre Fragen zum Coaching und der Vorgehensweise können Sie hier stellen. Erzählen Sie mir Ihr Anliegen und wir überlegen gemeinsam, wie wir starten können. Wenn mein Leistungsangebot zu Ihrem Anliegen passt und Sie es wünschen, kann ich Ihnen ein unverbindliches Angebot machen.',
      content_contact: {
        headline: 'Oder schreiben Sie mir eine E-Mail'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.kontakt {
  &__tel {
    font-size: 3rem;
    color: black;
    text-align: center;
    text-decoration: none;
  }
}
</style>
