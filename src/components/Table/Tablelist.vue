<template>

  <tbody class="">
  <tr class="" v-for="(user, index) in users" :key="index">
    <th scope="row"><input type="checkbox" :value="index" v-model="selected" @change="select"></th>
    <td class="td-img"><img src="@/assets/img-not-found.png"></td>
    <td>{{ user.name }}</td>
    <td>{{ user.email }}</td>
    <td>{{ user.adress }}</td>
    <td>{{ user.created }}</td>
    <td>
      <dropdown :users="users" :isOpen="isOpen">
        <template v-slot:trigger>
          <button type="button" class="btn" id="dropdownMenuOffset">
            <i class="bi bi-three-dots-vertical"></i>
          </button>
        </template>

          <li @click="editUser(user,index)" @openUpdated="openUpdated"><a
              class="dropdown-item px-2 text-xs block hover:bg-gray-900"
              href="#"><i
              class="bi bi-list"></i> View</a>
          </li>
          <li @click="removeUser(index)"><a
              class="dropdown-item px-2 text-xs block border-top border-dark border-2 hover:bg-gray-900" href="#"><i
              class="bi bi-x-lg red">
          </i> Delete</a></li>

      </dropdown>
    </td>
    <td><p></p></td>
    <td><p></p></td>
  </tr>
  </tbody>

</template>
<script>
import Dropdown from './Dropdown'


export default {
  props: ['users', 'user', 'selected', 'selectAll', 'modalView'],
  components: {Dropdown},

  data() {
    return {
      isOpen: false
    }
  },

  methods: {
    openUpdated(isOpen) {
      this.isOpen = isOpen
    },
    removeUser(index) {
      this.users.splice(index, 1);
      this.$emit('close');
    },
    select() {
      console.log(this.selected)
      //this.selected = []
      if (this.users.length == this.selected.length) {
        this.selectAll = true;
      }
      if (((this.selected.length) == 0) || !(this.users.length == this.selected.length)) {
        this.selectAll = false;
      }
      this.$emit('selectUpdated', this.selected, this.selectAll)
      console.log(this.selected)

    },
    editUser(user, index) {
      this.isOpen = false
      this.modalView.show = !this.modalView.show
      console.log(user)
      this.user.name = user.name
      this.user.email = user.email
      this.user.adress = user.adress
      console.log(user)
      this.$emit('openUpdated', this.isOpen)
      this.$emit('userUpdated', user, index)
    }
  }
}
</script>

<style>
.down-right {
  text-align: start;
  width: 150px;
  text-decoration: none;
  list-style-type: none;
  background-color: white;
  position: absolute;
  left: 60%;
  top: -26px;
  border: solid 2px black;
}
td{
  max-width: 70px;
  max-height: 10px;
}
tr{
  max-height: 10px;
}
.td-img {
  width: 3%;
}

td img {
  max-width: 80%;
}

.red {
  color: red;
}
</style>