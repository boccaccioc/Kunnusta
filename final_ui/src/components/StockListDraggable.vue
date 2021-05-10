<template>
  <div>
   <ul>
     <draggable :list="data">
      <li 
        v-for="(stock, i) in data"
        :key="i"
      >
        <StockDisplay v-if="stock" :data="stock" :moreDetails="false"/>
      </li>
    </draggable>
   </ul>
  </div>
</template>

<script>
import StockDisplay from './StockDisplay.vue'
import draggable from 'vuedraggable'

export default {
  name: 'StockListDraggable',
  components: {
    StockDisplay,
    draggable,
  },
  props: {
    data: Array,
  },
  methods: {
    
  },
  watch:{
      data(){
          this.$emit('data-update', this.data);
      },
  }
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
</style>
