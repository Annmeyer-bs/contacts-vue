<template>
  <div class="dropdown" @click="hidedropdown">
    <div class="dropdown-trigger" @click.prevent="open"
         aria-haspopup="true" :aria-expanded="isActive">
      <slot name="trigger"></slot>
    </div>

    <transition name="pop-out-quick">
      <ul v-show="isActive" class="ul down-right absolute mt-2 rounded text-white z-10">
        <slot>

        </slot>
      </ul>
    </transition>

  </div>
</template>
<script>
export default {

  props: ['users', 'isActive'],
  data() {
    return {}
  },
  methods: {
    open() {
      this.isActive = !this.isActive
    },
    hidedropdown() {
      this.$emit('update:show', false)
    }
  }

}
</script>

<style>
.pop-out-quick-enter-active, .pop-out-quick-leave-active {
  transition: all .4s;

}

.pop-out-quick-enter-active, .pop-out-quick-enter, .pop-out-quick-leave, .pop-out-quick-leave-active {
  opacity: 0;
  transform: translateX(7px);
}

.ul {
  padding-left: 0;
}

</style>