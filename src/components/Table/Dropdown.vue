<template>
  <div class="dropdown">
    <div class="dropdown-trigger" @click.prevent="isOpen = !isOpen"
    aria-haspopup="true" :aria-expanded="isOpen">
      <slot name="trigger"></slot>
    </div>

    <transition name="pop-out-quick">
    <ul v-show="isOpen">
      <slot>

      </slot>
    </ul>
    </transition>

  </div>
</template>
<script>
export default {
  props: ['users'],
  data() {
    return {
      isOpen: false
    }
  },
}
</script>

<style>
.pop-out-quick-enter-active, .pop-out-quick-leave-active {
  transition: all .4s;

}
.pop-out-quick-enter-active, .pop-out-quick-enter,.pop-out-quick-leave, .pop-out-quick-leave-active {
  opacity: 0;
  transform: translateX(7px);
}

</style>