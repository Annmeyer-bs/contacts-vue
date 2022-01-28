<template>

    <thead >
    <tr >
      <th scope="col"><input type="checkbox" ></th>
      <th scope="col"></th>
      <th scope="col" >
        <div class="th-item">Name
          <div @click="sort('name')" class="icon-group">
            <i class="bi bi-caret-up-fill"></i><i class="bi bi-caret-down-fill"></i>
          </div>
        </div>
      </th>
      <th scope="col">
        <div class="th-item">Email
          <div @click="sort('email')" class="icon-group">
            <i class="bi bi-caret-up-fill"></i><i class="bi bi-caret-down-fill"></i>
          </div>
        </div>
      </th>
      <th scope="col">
        <div class="th-item">Adress
          <div @click="sort('adress')" class="icon-group">
            <i class="bi bi-caret-up-fill"></i><i class="bi bi-caret-down-fill"></i>
          </div>
        </div>
      </th>
      <th scope="col">
        <div class="th-item">Created
          <div @click="sort('created')" class="icon-group">
            <i class="bi bi-caret-up-fill"></i><i class="bi bi-caret-down-fill"></i>
          </div>
        </div>
      </th>
      <th scope="col">  <p>   </p></th>
      <th scope="col"> <p>   </p> </th>
      <th scope="col">  <p>   </p></th>
    </tr>
    </thead>

</template>

<script>

export default {

  props: ['users','selectAll','selected','select','currentSort', 'usersSort', 'sort'],
  data() {
    return {}
  }
}
</script>

<style>
.icon-group {
  display: flex;
  flex-direction: column;
  color: #f1f1f1;
  cursor: pointer;
}
.th-item {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border: none;
}
</style>
