<template>
  <div id="app">
    <headers></headers>
    <tables></tables>


  </div>
</template>

<script>
import Headers from './components/Header';
import Tables from "./components/Table/Table";


export default {
  name: 'app',
  components: { Tables, Headers},
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
