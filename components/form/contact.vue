<template>
  <div class="contact">
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
      }
    }
  },
  methods: {
    updateStatus(status) {
      console.log('status', status)
      this.isSuccessfullSendet = status;
    }
  }
}
</script>

<style lang="scss">
.contact {
  min-height: 80vh;
  background-color: #FFDA51;
  &__headline {
    font-size: 2rem;
    text-align: left;
    font-weight: 300;
  }
  &__desc {
    max-width: 600px;
  }
  &__mail {
    transform: translate(-50%, -50%);
    &-space {
      min-height: 60vh;
    }
  }
}
</style>
