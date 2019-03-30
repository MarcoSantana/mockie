<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;" >
        <v-layout justify-center align-center column pa-5>
          <div class="display-3 font-weight-black white--text text-xs-center landing-text">
            Evaluación de publicación
          </div>
          <div class="display-2 font-weight-black white--text text-xs-center mb-3 landing-text">Consiga puntos de recertificación</div>
          <v-btn fab class="mt-5" color="teal darken-2" dark>
            <v-icon dark left>keyboard_arrow_down</v-icon>
          </v-btn>
        </v-layout>
    </v-container>
</template>
<script type="ts">
  name: 'HomeHero'
</script>

<style scoped>
  .home-hero {
    background: url('http://source.unsplash.com/LXDFEdtEGUQ');
    background-size: cover;
    width: 100%;
    height: 100%;
  }
  .landing-text {
    text-shadow: 2px 2px grey;
  }
  .v-icon {
    display: inline-flex !important;
    height: auto;
  }
</style>
