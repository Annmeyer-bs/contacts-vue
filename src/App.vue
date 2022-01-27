<template>
  <div id="app">
    <headers></headers>
    <tables></tables>
    <lines></lines>
    <contacts></contacts>
  </div>
</template>

<script>
import Headers from './components/Header'
import Contacts from './components/Contacts'
import Lines from "./components/Tablelist";
import Tables from "./components/Table";

export default {
  name: 'app',
  components: {Lines, Tables, Headers, Contacts },
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
