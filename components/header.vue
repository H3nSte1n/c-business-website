<template>
  <v-container>
    <v-row align="center">
      <v-col
        cols="12"
        sm="9"
        xl="7"
        :order="$vuetify.breakpoint.sm ? 'last': 'first'"
      >
        <h1 class="display-2 font-weight-medium">
          Unternehmenscoaching
        </h1>
        <p class="body-1">
          Für mehr positive Energie und gesunde Führungskultur
        </p>
      </v-col>
      <v-col
        cols="12"
        sm="3"
        xl="3"
      >
        <v-img
          alt="test image"
          src="https://picsum.photos/450/300?random=23123"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>
