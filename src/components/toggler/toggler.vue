<template>
  <button :class="['button', { active: isOpened }]" @click="toggle">
    <span class="text">{{ isOpened ? "Hide" : "View" }} issues</span>
    <span class="icon">
      <icon name="triangle"/>
    </span>
  </button>
</template>

<script>
import { icon } from '../../icons'
import useToggler from '../composables/useToggler'

export default {
  name: 'toggler',
  components: {
    icon
  },
  setup (props, { emit }) {
    const {
      isOpened,
      toggle
    } = useToggler(emit)

    return { isOpened, toggle }
  }
}
</script>

<style lang="scss" scoped>

.button {
  display: inline-flex;
  align-items: center;
  padding: 0;

  .icon {
    width: 10px;
    transform: rotate(180deg);
  }

  &.active {
    .icon {
      transform: rotate(0deg);
    }
  }
}

.text {
  margin-right: 5px;
}

</style>
