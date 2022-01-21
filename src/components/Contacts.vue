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
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Adress</th>
            <th scope="col">Created</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="contact in contacts" :key="contact.name">
            <th scope="row"><input type="checkbox" :value="contact.name" v-model="selected"></th>
            <td></td>
            <td>{{ contact.name }}</td>
            <td>{{ contact.email }}</td>
            <td>{{ contact.adress }}</td>
            <td>{{ contact.created }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-show="active" class="modal-dialog modal-dialog-centered">
      <div class="modal-mask">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
              <button type="button" @click="closeModal" class="btn-close" data-bs-dismiss="modal"
                      aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button @click="closeModal" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Understood</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      contacts: [
        {
          name: "John Doe",
          photo: "",
          email: "email@example.com",
          adress: "Ukraine, Zaporozhye",
          created: "email@example.com"
        },
        {
          name: "Jone Doe",
          photo: "",
          email: "email2@example.com",
          adress: "Ukraine, Kiev",
          created: "email@example.com"
        }
      ],
      selected: [],
      selectAll: false
    };
  },
  methods: {
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

</style>
