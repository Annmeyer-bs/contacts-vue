<template>
  <button class="button-add text-white d-flex flex-row align-items-center" @click="create">
      <i class="bi bi-plus-circle-fill"></i>
      <p>Add Contact</p>
  </button>
</template>
<script>
export default {
  props: {
    user: {},
    modalCreate: {},
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    create(){
      this.modalCreate.show = !this.modalCreate.show

        this.user.name = ''
        this.user.email = ''
        this.user.adress = ''

      this.$emit('userUpdated', this.user)
    }
  }
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