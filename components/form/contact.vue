<template>
  <div class="contact d-flex">
    <Form
      v-if="isSuccessfullSendet === null"
      @status="updateStatus"
    />
    <Success
      v-if="isSuccessfullSendet"
      :headline="success.headline"
    />
  </div>
</template>

<script>
import Form from '@/components/form/form';
import Success from '@/components/form/success';

export default {
  components: { Form, Success },
  data() {
    return {
      isSuccessfullSendet: null,
      success: {
        headline: 'Mail erfolgreich abgeschickt.'
      },
      failed: {
        headline: 'E-Mail konnte nicht verschickt werden.'
      }
    }
  },
  methods: {
    updateStatus(status) {
      this.isSuccessfullSendet = status;
    }
  }
}
</script>

<style lang="scss">
.contact {
  min-height: 400px;
  background-color: #FFDA51;
  overflow: hidden;
  &__headline {
    font-size: 2rem;
    text-align: left;
    font-weight: 300;
  }
  &__desc {
    max-width: 600px;
  }
}
</style>
