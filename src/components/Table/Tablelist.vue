<template>

    <tbody class="">
    <tr class="" v-for="(user, index) in users" :key="user.name">
      <th scope="row"><input type="checkbox" :value="user.name" v-model="selected" @click="select"></th>
      <td class="td-img"><img src="@/assets/img-not-found.png"></td>
      <td>{{ user.name }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.adress }}</td>
      <td>{{ user.created }}</td>
      <td>
        <dropdown :users="users">
          <template v-slot:trigger>
            <button type="button" class="btn" id="dropdownMenuOffset">
              <i class="bi bi-three-dots-vertical"></i>
            </button>
          </template>
          <div class="down-right absolute mt-2 rounded text-white z-10">
            <li @click="modalView.show = !modalView.show"><a class="dropdown-item px-2 text-xs block hover:bg-gray-900" href="#"><i
                class="bi bi-list"></i>   View</a>
            </li>
            <li @click="removeUser(index)"><a class="dropdown-item px-2 text-xs block border-top border-dark border-2 hover:bg-gray-900" href="#"><i class="bi bi-x-lg red">
            </i>  Delete</a></li>
          </div>
        </dropdown>
      </td>
      <td> <p>   </p> </td>
      <td> <p>   </p> </td>
    </tr>
    </tbody>

</template>
<script>
import Dropdown from './Dropdown'


export default {

  props: [ 'users', 'selected', 'modalView'],
  components: {Dropdown},
  data() {
    return {

    }
  },
  methods: {
    removeUser(index) {
      this.users.splice(index, 1);
      this.$emit('close');
    },
    select() {

      this.$emit('selectUpdated', this.selected)
    }
  },
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
  left: 55%;
  top: -40px;
  border: solid 2px black;
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