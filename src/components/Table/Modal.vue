<template>
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-mask">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">{{ modalTitle }}</h5>
            <button type="button" @click="$emit('close')" class="btn-close" data-bs-dismiss="modal"
                    aria-label="Close"></button>
          </div>
          <form @submit.prevent="onSubmit">
            <div class="modal-body">
              <slot name="body">
                <div class="modal-text">
                  <div class="modal-text-name">
                    <label>Name</label>

                    <input type="text" v-model="user.name" placeholder="Please enter your name">
                  </div>
                  <div class="modal-text-email">
                    <label>Email</label>
                    <input type="text" v-model="user.email" placeholder="Please enter your email">
                  </div>
                  <div class="modal-text-adress">
                    <label>Adress</label>
                    <input type="text" v-model="user.adress" placeholder="Please enter your adress">
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

import localeDateMixin from "../localeDateMixin";

export default {
  mixins: [localeDateMixin],

  props: {
    modalView: {},
    modalCreate: {},
    index: {},
    user: {},
    users: {},
    modalTitle: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      active: false,
      nameState: null,
      submittedNames: []
    };
  }
  ,
  methods: {
    openModal() {
      this.active = !this.active;
    },
    closeModal() {
      this.active = false;
    },
    onSubmit() {
      let $Checed = {
        name: this.user.name,
        photo: "",
        email: this.user.email,
        adress: this.user.adress,
        created: localeDateMixin.computed.localeDate()
      }
      console.log(this.index)
      console.log(this.user)
      if (this.modalTitle == 'View') {
        console.log('View')
        this.users.splice(this.index, 1, $Checed)

      } else {
        console.log('create')
        this.users.push($Checed)
      }

      this.user.name = ''
      this.user.email = ''
      this.user.adress = ''
      this.$emit('close')
      this.$emit('listUpdated', this.users)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  margin: 0 10px;
}

.modal-mask {
  transition: opacity .3s ease;
  background-color: rgba(00, 00, 00, .43);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100vw;
  height: 100vh;
}

.modal-dialog {
  max-width: 700px;
  margin: 8% 13%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1055;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}

.modal-header, .modal-footer {
  border: none;
}

.modal-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.modal-img {
  width: 140px;
  height: 140px;
}

img {
  max-width: 100%;
}

td img {
  max-width: 80%;
}

input {
  margin: 20px;
}
</style>
