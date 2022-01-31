<template>
    <button class="button-delete text-white d-flex flex-row align-items-center" @click="userDeleteCheck">
      <i class="bi bi-plus-circle-fill"></i>
      <p>Delete Contact</p>
    </button>
</template>
<script>
export default {
  props:['userDeleteCheck'],
  data() {
    return {
    }
  },
}
</script>

<style>
.button-delete {
  background-color: red;
}
p {
  margin: 0 10px;

}
</style>