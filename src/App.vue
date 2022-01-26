<template>
  <div id="app">
    <headers></headers>
    <contacts></contacts>
  </div>
</template>

<script>
import Headers from './components/Header'
import Contacts from './components/Contacts'


export default {
  name: 'app',
  components: { Headers, Contacts},
  data() {
    return {

    }
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}
</style>
