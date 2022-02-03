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
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');


</style>
