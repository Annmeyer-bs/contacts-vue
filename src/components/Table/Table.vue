<template>
  <div class="container">
    <div class="d-flex flex-row justify-content-between">
      <p class="m-3">Contacts</p>
      <div class="button d-flex">
        <buttonadd class="m-2 " :modalCreate="modalCreate" :user="user"></buttonadd>
        <buttondelete class="m-2 " :userDeleteCheck="userDeleteCheck"></buttondelete>
      </div>
    </div>
    <table class="table " id="sortable">
      <tableheader :users='users' selectAll="selectAll"
                   @selectedUpdated="selectedUpdated"
                   @listUpdated="listUpdated"></tableheader>
      <tablelist :users='users' :user="user" @userUpdated="userUpdated"
                 :selected="selected" @selectUpdated="selectUpdated" :selectAll="selectAll"
                 @listUpdated="listUpdated"
                 :modalView="modalView" :index="index"></tablelist>
    </table>
    <modal modalTitle="Create" @listUpdated="listUpdated" v-if="modalCreate.show" @close="modalCreate.show = false" :users="users" :user="user" :index="index"></modal>
    <modal modalTitle="View"  @listUpdated="listUpdated" v-if="modalView.show" @close="modalView.show = false" :users="users" :user="user" :index="index"
           :modalView="modalView.show">
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
      selected: [],
      selectAll: false,
      index: '',
      user: {
        name: '',
        photo: '',
        email: '',
        adress: '',
        created: ''
      }
    }
  },
  computed: {},
  methods: {
    listUpdated(users) {
      this.users = users;
    },
    userUpdated(user, index) {
      this.user = user;
      this.index = index;
      console.log(this.user, 4)
    },
    selectedUpdated(selected) {
      this.selected = selected;
    },
    selectUpdated(selected) {
      this.selected = selected;
    },
    // updateCheckall (selectAll) {
    //   this.selectAll = selectAll;
    // },


    userDeleteCheck() {
      // this.users = this.users.filter(user => !user.selected)
      // this.users.splice(this.users[i], 1);
      for (let i = 0; i < this.selected.length; i++) {
        //   if (this.users[i].selected === true) {
        this.users.splice(this.selected[i], 1);
      }
      // }
      // if (!this.selected) {
      //   for (let user in this.selected) {
      // this.users.splice(this.selected, 1);
      // }
      // }
      console.log(this.selected)
      //       this.$emit('listUpdated', this.users)
      //this.users.splice(this.selected, 1);
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
  min-height: 400px;
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
