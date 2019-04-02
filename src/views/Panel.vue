<template lang="html">
  <v-container grid-list-lg>
    <updates></updates>
    <questions></questions>

  </v-container>
</template>

<script>
import Updates from '@/components/Updates';
import Questions from '@/components/Questions';

export default {
  name: 'Panel',
  components: {
    Updates,
    Questions
  }
}
</script>

<style lang="css" scoped>
</style>
