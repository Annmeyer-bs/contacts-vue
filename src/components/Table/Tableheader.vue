<template>

    <thead >
    <tr >
      <th scope="col"><input type="checkbox" v-model="selectAll" @click="select"  >{{selectAll}}</th>
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

  props: ['users'],
  data() {
    return {
      currentSort: 'name',
      currentSortDir: 'asc',
      selected: [],
      selectAll: false
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
      this.$emit('selectedUpdated', this.selected)
    },
    // checkall() {
    //   if(this.users.length == this.selected.length){
    //     this.selectAll = true;
    //   }else{
    //     this.selectAll = false;
    //   }
    //   this.$emit('updateCheckall', this.selectAll)
    //     },
    sort(e) {
      if (e === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
      }
      this.currentSort = e
      this.usersSort(this.users);
    },
    usersSort(users) {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      users.sort((a, b) => {
        let mod = 1
        if (this.currentSortDir === 'desc') mod = -1
        if (a[this.currentSort] < b[this.currentSort]) return -1 * mod
        if (a[this.currentSort] > b[this.currentSort]) return 1 * mod
        return 0
      });

      this.$emit('listUpdated', users)
    }
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
