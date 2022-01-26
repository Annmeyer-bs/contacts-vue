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
import dataMixin from "./dataMixin";

export default {
  mixins: [dataMixin],
  props: {
    title: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      active: false,
      columnsContacts: ["name", "email", "adress"],
      name: '',
      email: '',
      adress: '',
      created: '',
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
      if (this.name.trim() && this.email.trim() && this.adress.trim()) {
        let $Checed = {
          name: this.name,
          photo: "",
          email: this.email,
          adress: this.adress,
          created: new Date()
        }
        this.contacts.push($Checed)
        console.log(this.name)
        this.name = ''
        this.email = ''
        this.adress = ''
        this.$emit('close');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section {

  max-width: 1440px;
}

.container {
  display: block;
  margin: auto;
}

.container__content {
  border: 2px solid black;
  height: 500px;
}

.container__header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.button-add {
  position: relative;
  top: 40px;
  left: 75%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #2b78e4;
}

p {
  margin: 0 10px;
}

.bi-plus-circle-fill {
  color: white;
}

.table {
  max-height: 800px;
}

.table > :not(:first-child) {
  border-top: 2px solid #f1f1f1;
}

thead {
  background: #fafafa;
}

/*  ---modal-- */
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

.td-img {
  width: 3%;
}

td img {
  max-width: 80%;
}

input {
  margin: 20px;
}

.table > :not(caption) > * > * {
  padding: 0;
  vertical-align: middle;
  text-align: center;
}

.icon-group {
  display: flex;
  flex-direction: column;
  color: #f1f1f1;
}

.th-item {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border: none;
}

.active {
  display: block;
  margin: 0 30px;
}

</style>
