<template>
  <div>
    <span id="counter">{{ data.length }} Items </span>

   <ul>
      <li 
        v-for="(stock, i) in data"
        :key="i"
      >
        <StockDisplay v-if="stock" :data="stock" @show-sidebar='showSidebar' @delete-stock="deleteStock" />
      </li>
   </ul>
  </div>
</template>

<script>
import StockDisplay from './StockDisplay.vue'

export default {
  name: 'StockListDisplay',
  components: {
    StockDisplay,
  },
  props: {
    data: Array,
  },
  methods: {
    // method to show sidebar
    showSidebar(data){
      this.$emit('show-sidebar', data);
    },
    deleteStock(ticker){
        this.$emit("delete-stock", ticker);
      },
  },
  // watch: {
  //   data: {
  //     // flag to tell Vue to watch for ANY changes by ANY component
  //     deep: true,
  //     // response to a change, update ALL Strings displayed in the cart
  //     handler() {
  //         this.data = this.data.map((e) => e);
  //     },
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 30px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#counter {
  color: blueviolet;
  font-size: 30px;
}
</style>
