<template>
  <div class="container">
    <div class="d-flex flex-row justify-content-between">
      <p class="m-3">Contacts</p>
      <div class="button d-flex">
        <buttonadd class="m-2 " :modalCreate="modalCreate"></buttonadd>
        <buttondelete class="m-2 " :userDeleteCheck="userDeleteCheck"></buttondelete>
      </div>
    </div>
    <table class="table" id="sortable">
      <tableheader :users='users'
                   @selectedUpdated="selectedUpdated"
                   @listUpdated="listUpdated"></tableheader>
      <tablelist :users='users' :selected="selected" :modalView="modalView" @selectUpdated="selectUpdated"></tablelist>
    </table>
    <modal title="Create" v-if="modalCreate.show" @close="modalCreate.show = false" :users="users"></modal>
    <modal title="View" v-if="modalView.show" @close="modalView.show = false" :users="users" :modalView="modalView">
      <div slot="body" class="modal-view">
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
import Buttondelete from "./Buttondelete";
import Tableheader from "./Tableheader";
import Tablelist from "./Tablelist";
import Modal from "./Modal";


export default {

  components: {Modal, Buttonadd, Buttondelete, Tableheader, Tablelist},
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
          selected: false,
          name: "John Doe",
          photo: "",
          email: "email@example.com",
          adress: "Ukraine, Zaporozhye",
          created: "January 28, 2022, 1:45 PM"
        },
        {
          selected: false,
          name: "Lone Doe",
          photo: "",
          email: "lmail2@example.com",
          adress: "Ukraine, Kharkiv",
          created: "January 29, 2022, 1:55 PM"
        }
      ],

      selectAll: false
    }
  },
  computed: {

  },
  methods: {
    listUpdated(users){
      this.users = users;
    },
    selectedUpdated (selected) {
      this.selected = selected;
    },
    selectUpdated (selected) {
      this.selected = selected;
    },

    userDeleteCheck() {
      // for (let user in selected) {
      //   this.user.splice(user, 1);
      // }
      console.log(this.selected)
      this.users.splice(this.selected, 1);
    }
    // updateCheckAll() {
    //   if(this.users.length == this.selected.length){
    //     this.selectedAll = true;
    //   }else{
    //     this.selectedAll = false;
    //   }
    // }
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

.modal-view {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>
