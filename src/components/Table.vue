<template>
  <div class="container">
    <div class="d-flex flex-row justify-content-between">
      <p class="m-3">Contacts</p>
      <buttonadd class="m-2 "></buttonadd>
    </div>
    <table class="table">
    <tableheader></tableheader>
      <tablelist v-for='user in users' :key='user.name'
                 :name='user.name'
                 :email='user.email'
                 :adress='user.adress'
                 :created='user.created'></tablelist>
    </table>
  </div>
</template>

<script>
import Buttonadd from "./Buttonadd";
import Tableheader from "./Tableheader";
import Tablelist from "./Tablelist";

export default {

  components: { Buttonadd, Tableheader, Tablelist },
  data() {
    return {
      users: [
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
      selected: [],
      selectAll: false,
    }
  },
  methods: {
    select() {
      this.selected = [];
      if (!this.selectAll) {
        for (let user in this.users) {
          this.selected.push(this.users[user].name);
        }
      }
    },
  }
}
</script>

<style>

.container {
  border: solid 2px black;
  padding: 0;
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
