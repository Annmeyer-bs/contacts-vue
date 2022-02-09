<template>

  <thead>
  <tr>
    <th scope="col"><input type="checkbox" v-model="selectAllUp" @change="select"> {{ this.selectAllUp }}</th>
    <th scope="col"></th>
    <th scope="col">
      <div class="th-item">Name
        <div class="icon-group d-flex sort-icon">
          <i class="fas fa-sort" @click="sort('name')" :class="sortedClass('name')"></i>
        </div>
      </div>
    </th>
    <th scope="col">
      <div class="th-item">Email
        <div class="icon-group sort-icon">
          <i class="fas fa-sort" @click="sort('email')" :class="sortedClass('email')"></i>
        </div>
      </div>
    </th>
    <th scope="col">
      <div class="th-item">Adress
        <div class="icon-group sort-icon">
          <i class="fas fa-sort" @click="sort('adress')" :class="sortedClass('adress')"></i>
        </div>
      </div>
    </th>
    <th scope="col">
      <div class="th-item">Created
        <div class="icon-group sort-icon">
          <i class="fas fa-sort" @click="sort('created')" :class="sortedClass('created')"></i>
        </div>
      </div>
    </th>
    <th scope="col"><p></p></th>
    <th scope="col"><p></p></th>
    <th scope="col"><p></p></th>
  </tr>
  </thead>

</template>

<script>

export default {
  props: ['users', 'selectAll'],

  data() {
    return {
      currentSort: '',
      currentSortDir: 'asc',
      sortSelectName: false,
      sortSelectEmail: false,
      sortSelectAdress: undefined,
      sortSelectCreated: undefined,
      items: [
        {
          id: 'bi bi-caret-up-fill'
        },
        {
          id: 'bi bi-caret-down-fill'
        }
      ]
    }

  },
  computed: {
    selectAllUp: {
      get() {
        return this.selectAll;
      },
      set(data) {
        this.$emit('selectAllUpdated', data)
      }
    },
  },
  methods: {
    select() {
      if (!this.selectAllUp) {
      this.users.forEach(function (user) {
        user.selected=true
      })
      } else {
        this.users.forEach(function (user) {
          user.selected=false
        })
      }
    },
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
    },
    sortedClass(key) {
      return this.currentSort === key ? `${this.currentSortDir == 'asc' ? 'fa-sort-down act' : 'fa-sort-up act'}` : '';
    },

  }
}
</script>

<style>
.fas {
  font-size: 25px;
}

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

.sort-icon {
  text-decoration: none;
  list-style-type: none;
}

.act {
  color: grey;
}

</style>
