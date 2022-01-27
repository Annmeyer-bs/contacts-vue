<template>

    <thead >
    <tr >
      <th scope="col"><input type="checkbox" v-model="selectAll" @click="select"></th>
      <th scope="col"></th>
      <th scope="col">
        <div class="th-item">Name
          <div class="icon-group">
            <i class="bi bi-caret-up-fill"></i><i class="bi bi-caret-down-fill"></i>
          </div>
        </div>
      </th>
      <th scope="col">
        <div class="th-item">Email
          <div class="icon-group">
            <i class="bi bi-caret-up-fill"></i><i class="bi bi-caret-down-fill"></i>
          </div>
        </div>
      </th>
      <th scope="col">
        <div class="th-item">Adress
          <div class="icon-group">
            <i class="bi bi-caret-up-fill"></i><i class="bi bi-caret-down-fill"></i>
          </div>
        </div>
      </th>
      <th scope="col">
        <div class="th-item">Created
          <div class="icon-group">
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
}
.th-item {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border: none;
}
</style>
