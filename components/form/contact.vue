<template>
  <div class="contact d-flex">
    <Form
      v-if="isSuccessfullSendet === null"
      :content="content"
      :center-headline="centerHeadline"
      :small-headline="smallHeadline"
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
  props: {
    content: {
      type: Object,
      required: true,
      default: () => {}
    },
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
  },
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
@import '@/scss/colors.scss';

.contact {
  min-height: 400px;
  background-color: $yellow;
  overflow: hidden;
  &__headline {
    font-size: 2rem;
    text-align: left;
    font-weight: 300;
    &--center {
      text-align: center;
    }
  }
  &__desc {
    max-width: 600px;
  }
}
</style>
