<template>
  <div class="container">
    <div class="d-flex flex-row justify-content-between">
      <p class="m-3">Contacts</p>
      <buttonadd class="m-2 " :modalCreate="modalCreate"></buttonadd>
    </div>
    <table class="table" id="sortable">
    <tableheader :users='users' :usersSort='usersSort' :sort="sort" :selectAll="selectAll" :selected="selected" :select="select" :currentSort="currentSort"></tableheader>
    <tablelist :users='users' :usersSort='usersSort' :selectAll="selectAll" :selected="selected" :select="select" :modalView="modalView"></tablelist>
    </table>
    <modal title="Create" v-if="modalCreate.show" @close="modalCreate.show = false" :users="users"></modal>
    <modal title="View" v-if="modalView.show" @close="modalView.show = false" :users="users" :modalView="modalView">
      <div slot="body" class="d-flex flex-row justify-content-between">
        <div class="modal-text">
          <div class="modal-text-name">
            <label>Name</label>
            <input type="text" v-model.trim="name" placeholder="Please enter your name view">
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
      </div>
    </modal>
  </div>
</template>

<script>
import Buttonadd from "./Buttonadd";
import Tableheader from "./Tableheader";
import Tablelist from "./Tablelist";
import Modal from "./Modal";

export default {

  components: {Modal, Buttonadd, Tableheader, Tablelist },
  data() {
    return {
      modalCreate: {
        show: false
      },
      modalView: {
        show: false
      },
      users: [
        {
          name: "John Doe",
          photo: "",
          email: "email@example.com",
          adress: "Ukraine, Zaporozhye",
          created: "January 28, 2022, 1:45 PM"
        },
        {
          name: "Lone Doe",
          photo: "",
          email: "lmail2@example.com",
          adress: "Ukraine, Kharkiv",
          created: "January 29, 2022, 1:55 PM"
        }
      ],
      selected: [],
      selectAll: false,
      currentSort: 'name',
      currentSortDir: 'asc'
    }
  },
  computed: {
    usersSort () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.users.sort((a,b) => {
        let mod =1
        if(this.currentSortDir === 'desc') mod = -1
        if (a[this.currentSort] < b[this.currentSort]) return -1 * mod
        if (a[this.currentSort] > b[this.currentSort]) return 1 * mod
        return 0
      });
    }
  },
  methods: {
    select() {
      this.selected = [];
      if (!this.selectAll) {
        for (let user in this.users) {
          this.selected.push(this.users[user].name);
          console.log(this.selected)
        }
      }
    },
    sort(e) {
      if(e === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
      }
      this.currentSort = e
    }
  }
}
</script>

<style>

.container {
  border: solid 2px black;
  padding: 10px;
  margin: 40px auto;
  height: 400px;
}
.table {
  width: 100%;
  border-collapse: unset;
}
.table > :not(caption) > * > * {
  padding: 0;
  vertical-align: middle;
  text-align: center;
}

</style>
