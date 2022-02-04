<template>

  <thead>
  <tr>
    <th scope="col"><input type="checkbox" v-model="selectAll" @click="select"></th>
    <th scope="col"></th>
    <th scope="col" >
      <div class="th-item" @click="sort('name')" :class="sortedClass('name')">Name
        <div class="icon-group sorticon"
             >
<!--          <li v-for="(item, sortindex) in items" v-bind:key="sortindex" :class="{sortnameact:item.id == sortSelectName}"-->
<!--              @click="sortSelectName = item.id"><i :class="item.id"  @change="sortChange"></i>-->
<!--          </li>-->
        </div>
      </div>
    </th>
    <th scope="col">
      <div class="th-item" @click="sort('email')" :class="sortedClass('email')">Email
        <div class="icon-group sorticon"
             >
<!--          <li v-for="(item, sortindex) in items" v-bind:key="sortindex" :class="{sortemailact:item.id == sortSelectEmail}"-->
<!--              @click="sortSelectEmail = item.id"><i :class="item.id"></i>-->
<!--          </li>-->
        </div>
      </div>
    </th>
    <th scope="col">
      <div class="th-item" @click="sort('adress')" :class="sortedClass('adress')">Adress
        <div class="icon-group sorticon"
             >
<!--          <li v-for="(item, sortindex) in items" v-bind:key="sortindex" :class="{sortadressact:item.id == sortSelectAdress}"-->
<!--              @click="sortSelectAdress = item.id"><i :class="item.id"></i>-->
<!--          </li>-->
        </div>
      </div>
    </th>
    <th scope="col">
      <div class="th-item"  @click="sort('created')" :class="sortedClass('created')" >Created
        <div class="icon-group sorticon"
             >
<!--          <li v-for="(item, sortindex) in items" v-bind:key="sortindex" :class="{sortcreatedact:item.id == sortSelectCreated}"-->
<!--              @click="sortSelectCreated = item.id"><i :class="item.id"></i>-->
<!--          </li>-->
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
  props: ['users', 'selectAll', 'selected'],

  data() {
    return {
      currentSort: 'name',
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

  methods: {
    select() {
      if (!this.selectAll) {
        this.selected = []
        for (let i = 0; i < this.users.length; i++) {
          this.selected.push(i);
        }
      } else {
        this.selected = []
      }
      this.$emit('selectUpdated', this.selected, this.selectAll)
    },
    sort(e) {
      if (e === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
      }
   //   this.currentSortDir = this.currentSort=== e ? !this.currentSortDir : 'desc';
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
      this.$emit('listUpdated', users, this.selectAll)
    },
    sortedClass (key) {
      return this.currentSort === key ? `sorted ${this.currentSortDir=='asc' ? 'asc' : 'desc' }` : '';
    },

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
.sorticon {
  text-decoration: none;
  list-style-type: none;
}
/*.sortnameact, .sortemailact, .sortadressact, .sortcreatedact {*/
/*  color: red;*/
/*}*/
.asc::after {
   display: inline-block;
   content: '▼';
    color: red;
 }
.desc::after {
   display: inline-block;
   content: '▲';
   color: red;
 }
</style>
