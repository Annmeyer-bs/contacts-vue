<template>
  <div class="container">
    <div class="d-flex flex-row justify-content-between ">
      <p class="m-3">Contacts</p>
      <div class="button d-flex">
        <buttonadd class="m-2 " :modalCreate="modalCreate" :user="user" @userUpdated="userUpdated"></buttonadd>
        <buttondelete class="m-2 " :userDeleteCheck="userDeleteCheck"></buttondelete>
      </div>
    </div>
    <div><p class="msg">{{ msg }}</p></div>
    <table class="table " id="sortable">
      <tableheader :users='users' :selectAll="selectAll" :selected="selected"
                   @selectUpdated="selectUpdated"
                   @listUpdated="listUpdated"></tableheader>
      <tablelist :users='users' :user="user" @userUpdated="userUpdated"
                 :selected="selected" @selectUpdated="selectUpdated" :selectAll="selectAll"
                 @listUpdated="listUpdated"
                 :modalView="modalView" :index="index"></tablelist>
    </table>
    <modal modalTitle="Create" @listUpdated="listUpdated" v-if="modalCreate.show" @close="modalCreate.show = false"
           :users="users" :user="user" :index="index" ></modal>
    <modal modalTitle="View" @listUpdated="listUpdated" @userUpdated="userUpdated" v-if="modalView.show" @close="modalView.show = false"
           :users="users" :user="user" :index="index"
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
  el: '#dire',
  components: { Modal, Buttonadd, Buttondelete, Tableheader, Tablelist},
  data() {
    return {
      dataOfModel: 'Test',
      isActive: true,
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
      msg: '',
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
    show() {
      this.isActive = true;
    },
    hide() {
      this.isActive = false;
    },
    listUpdated(users) {
      this.users = users;
    },
    userUpdated(user, index) {
      this.user = user;
      this.index = index;
      this.selectAll = false
      this.selected = []
    },
    selectUpdated(selected, selectAll) {
      this.selected = selected;
      this.selectAll = selectAll;
    },
    userDeleteCheck() {
      if (this.selected.length == 0) {
        this.msg = 'Пожалуйста, выберите check для удаления !!!'
      } else {
        this.msg = ' '
        for (let i = 0; i < this.selected.length; i++) {
          this.users.splice(this.selected, 1);
        }
        this.selected = []
        this.selectAll = false
      }
      for (let i = 0; i < this.selected.length; i++) {
        this.users.splice(this.selected[i], 1);
      }
    }
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

.btn-text {
  margin-bottom: 0;
}

p {
  margin: 0 10px;
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
