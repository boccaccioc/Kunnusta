<template>
  <div id="holder">
      <h3> User Data (Only Visible to Admins) </h3>
      <ul>
          <li v-for="(user, i) in userIDs" :key='i'>
              <h5> {{ user }} </h5>
              <div> Is admin? {{ data[user].profile.adminStatus }}</div>
              <ul>
                  <li v-for="(stock, i) in data[user].stocks" :key='i'>
                      <div>  {{ stock }} </div>
                  </li>
              </ul>
          </li> 
      </ul>
  </div>
</template>

<script>
export default {
  name: 'AdminView',
  props: {
    data: Object,
  },
  computed: {
      userIDs() {
          return Object.keys(this.data)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#holder {
    text-align: left;
}
</style>