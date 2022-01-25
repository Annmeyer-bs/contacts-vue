<template>
  <section class="section">
    <div class="container">
      <div class="container container__header">
        <button class="button button-add" @click="openModal">
          <i class="bi bi-plus-circle-fill"></i>
          <p>Add Contact</p>
        </button>
      </div>

      <div class="container container__content">
        <table class="table caption-top">
          <caption>Contacts</caption>

          <thead>
          <tr>
            <th scope="col"><input type="checkbox" v-model="selectAll" @click="select"></th>
            <th scope="col"></th>
            <th scope="col"><div class="th-item">Name <div class="icon-group">
              <i class="bi bi-caret-up-fill"></i><i class="bi bi-caret-down-fill"></i>
            </div></div></th>
            <th scope="col"><div class="th-item">Email <div class="icon-group">
              <i class="bi bi-caret-up-fill"></i><i class="bi bi-caret-down-fill"></i>
            </div></div></th>
            <th scope="col"><div class="th-item">Adress <div class="icon-group">
              <i class="bi bi-caret-up-fill"></i><i class="bi bi-caret-down-fill"></i>
            </div></div></th>
            <th scope="col"><div class="th-item">Created <div class="icon-group">
              <i class="bi bi-caret-up-fill"></i><i class="bi bi-caret-down-fill"></i>
            </div></div></th>
            <th scope="col"></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(contact, index) in contacts" :key="contact.name">
            <th scope="row"><input type="checkbox" :value="contact.name" v-model="selected"></th>
            <td class="td-img"><img src="@/assets/img-not-found.png"></td>
            <td>{{ contact.name }}</td>
            <td>{{ contact.email }}</td>
            <td>{{ contact.adress }}</td>
            <td>{{ contact.created }}</td>
            <td><div class="btn-group dropend">
              <button @click="toggle" type="button" class="btn" id="dropdownMenuOffset">
                <i class="bi bi-three-dots-vertical"></i>
              </button>
              <ul v-show="activeDots" v-bind:class="{active: activeDots}" class="dropdown-menu">
                <li><a class="dropdown-item" href="#"><i class="bi bi-list"></i>  View</a></li>
                <li v-on:click="removeContact(index)" ><a class="dropdown-item" href="#"><i class="bi bi-x-lg red"></i>  Delete</a></li>
              </ul>
            </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
      <div v-show="active" class="modal-dialog modal-dialog-centered">
        <div class="modal-mask"></div>
        <div class="modal-dialog">
          <form @submit.prevent="onSubmit">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Create Contact</h5>
                <button type="button" @click="closeModal" class="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="modal-text">
                  <div class="modal-text-name">
                    <label>Name</label>
                    <input type="text" v-model="name" placeholder="Please enter your name">
                  </div>
                  <div class="modal-text-email">
                    <label>Email</label>
                    <input type="text" v-model="email" placeholder="Please enter your email">
                  </div>
                  <div class="modal-text-adress">
                    <label>Adress</label>
                    <input type="text" v-model="adress" placeholder="Please enter your adress">
                  </div>
                </div>
                <div class="modal-img">
                  <img src="@/assets/img-not-found.png">
                </div>
              </div>
              <div class="modal-footer">
                <button @click="closeModal" type="button" class="btn btn-secondary" data-bs-dismiss="modal">CLOSE
                </button>
                <button type="submit" class="btn btn-primary"><i class="bi bi-check-lg"></i> SAVE CHANGES</button>
              </div>
            </div>
          </form>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      activeDots: false,
      contacts: [
        {
          name: "John Doe",
          photo: "",
          email: "email@example.com",
          adress: "Ukraine, Zaporozhye",
          created: "email@example.com"
        },
        {
          name: "Lone Doe",
          photo: "",
          email: "lmail2@example.com",
          adress: "Ukraine, Kiev",
          created: "email@example.com"
        }
      ],
      columnsContacts: ["name", "email", "adress"],
      selected: [],
      selectAll: false,
      name: '',
      email: '',
      adress: '',
      nameState: null,
      submittedNames: []
    };
  },
  methods: {
    toggle() {
      this.activeDots = !this.activeDots;
    },
    select() {
      this.selected = [];
      if (!this.selectAll) {
        for (let contact in this.contacts) {
          this.selected.push(this.contacts[contact].name);
        }
      }
    },
    openModal() {
      this.active = !this.active;
    },
    closeModal() {
      this.active = false;
    },
    onSubmit() {
      if (this.name.trim() && this.email.trim() && this.adress.trim()) {
        this.contacts.push( {
          name: this.name,
          photo: "",
          email: this.email,
          adress: this.adress,
          created: new Date()
        })
        this.name = ''
        this.email = ''
        this.adress = ''
        this.closeModal()
      }
    },
    removeContact(index) {
			this.contacts.splice(index, 1);
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
  opacity: .8;
  background-color: #000;
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
.active{
  display: block;
  margin: 0 30px;
}

</style>
