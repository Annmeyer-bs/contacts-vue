<template>
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-mask">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">{{ title }}</h5>
            <button type="button" @click="$emit('close')" class="btn-close" data-bs-dismiss="modal"
                    aria-label="Close"></button>
          </div>
          <form @submit.prevent="onSubmit">
            <div class="modal-body">
              <slot name="body">
                <div class="modal-text">
                  <div class="modal-text-name">
                    <label>Name</label>
                    <input type="text" v-model.trim="name" placeholder="Please enter your name">
                  </div>
                  <div class="modal-text-email">
                    <label>Email</label>
                    <input type="text" v-model.trim="email" placeholder="Please enter your email">
                  </div>
                  <div class="modal-text-adress">
                    <label>Adress</label>
                    <input type="text" v-model.trim="adress" placeholder="Please enter your adress">
                  </div>
                </div>
                <div class="modal-img">
                  <img src="@/assets/img-not-found.png">
                </div>
              </slot>
            </div>

            <div class="modal-footer">
              <slot name="footer">
                <button @click="$emit('close')" type="button" class="btn btn-secondary" data-bs-dismiss="modal">CLOSE
                </button>
                <button type="submit" class="btn btn-primary"><i class="bi bi-check-lg"></i> SAVE CHANGES</button>
              </slot>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.modal- {

}

.modal- {

}


</style>
