<template>
  <b-sidebar v-model="data.visible" shadow right backdrop>
      <h1> {{ this.data.display.ticker }} </h1>
      <h3> Last Close Price: ${{ this.data.display.price }} </h3>
      <h3> Date Updated: {{ this.data.display.lastRefreshed }} </h3>
      <div> Extensive data on {{ this.data.display.ticker }} can be found <a :href="url"> here </a> </div>
  </b-sidebar>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    data: Object,
  },
  computed: {
      url(){
          return "https://finance.yahoo.com/quote/"+ this.data.display.ticker;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>