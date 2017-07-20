<template>
  <div id="app">
    <phone-book></phone-book>
  </div>
</template>

<script>
import PhoneBook from './components/PhoneBook'

export default {
  name: 'app',
  components: {
    PhoneBook
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
