<template>

  <div class="container">
    <h4 class="text-success">Select/DeSelect All Checkbox Using Vuejs</h4>



          <input type="checkbox" v-model="selectAll" @click="select()" /> Select all
          <div v-for='(option, index) in options' class="checkbox" v-bind:key="index">
            <label>  <input type="checkbox" :value="option" v-model="selected" @change='updateCheckall()'>{{ option }}</label>
          </div>
          </div>
</template>

<script>

export default {

  data() {
    return {
      options: ["OPTION1", "OPTION2", "OPTION3", "OPTION4", "OPTION5"],
      selected: [],
      selectAll: false
    }
  },
  methods: {
    select() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.options) {
          this.selected.push(this.options[i]);
        }
      }
    },

    updateCheckall: function(){
      if(this.options.length == this.selected.length){
        this.selectAll = true;
      }else{
        this.selectAll = false;
      }
    }
  }

}
</script>

<style>


</style>