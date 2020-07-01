<template>
  <c-container>
    <Header />
    <stripe />
  </c-container>
</template>

<script>
import Header from '@/components/header';
import stripe from '@/components/stripe';
export default {
  components: { Header, stripe }

}
</script>
