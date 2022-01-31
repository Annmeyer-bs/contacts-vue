<template>
    <button class="button-add text-white d-flex flex-row align-items-center" @click="modalCreate.show = !modalCreate.show">
      <i class="bi bi-plus-circle-fill"></i>
      <p>Add Contact</p>
    </button>
</template>
<script>
export default {
  props:['modalCreate'],
  data() {
    return {
      isOpen: false
    }
  },
}
</script>

<style>
.button-add {
  background-color: #2b78e4;
}
p {
  margin: 0 10px;

}
</style>