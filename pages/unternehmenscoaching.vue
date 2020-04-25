<template>
  <c-container>
    <Header />
    <info-container />
  </c-container>
</template>

<script>
import Header from '@/components/header';
import InfoContainer from '@/components/infoContainer';
export default {
  components: { Header, InfoContainer }

}
</script>
