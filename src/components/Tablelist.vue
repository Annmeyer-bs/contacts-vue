<template>

    <tbody class="">
    <tr class="" v-for="(user) in this.users" :key="user.name">
      <th scope="row"><input type="checkbox" :value="user.name" v-model="selected"></th>
      <td class="td-img"><img src="@/assets/img-not-found.png"></td>
      <td>{{ user.name }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.adress }}</td>
      <td>{{ user.created }}</td>
      <td>
        <dropdown>
          <template v-slot:trigger>
            <button type="button" class="btn" id="dropdownMenuOffset">
              <i class="bi bi-three-dots-vertical"></i>
            </button>
          </template>
          <div class="down-right absolute bg-black mt-2 py-2 rounded shadow text-white z-10">
            <li><a class="dropdown-item px-2 text-xs block hover:bg-gray-900" href="#"><i
                class="bi bi-list"></i>View</a>
            </li>
            <li><a class="dropdown-item px-2 text-xs block hover:bg-gray-900" href="#"><i class="bi bi-x-lg red">
            </i> Delete</a></li>
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
  props: [
    'users'
  ],
  components: {Dropdown},
  data() {
    return {}
  }
}
</script>

<style>
.down-right {
  width: 150px;
  text-decoration: none;
  list-style-type: none;
  background: red;
  position: absolute;
  left: 55%;
  top: -40px;
}
.table-list-item {

}
.td-img {
  width: 3%;
}

td img {
  max-width: 80%;
}

</style>