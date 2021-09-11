<template>
<div class="c-xProgress">
  <div ref="indicator" class="indicator" :class="{ active: isActive }"></div>
</div>
</template>

<script>
import useXprogress from '../composables/useXprogress'

export default {
  name: 'xProgress.vue',
  props: {
    isLastSlide: {
      type: Boolean,
      default: false
    }
  },
  emits: ['onFinish'],
  setup (props, { emit }) {
    const {
      indicator,
      isActive,
      emitOnFinish,
      setActive
    } = useXprogress(props, emit)

    return { indicator, isActive, emitOnFinish, setActive }
  }
}
</script>

<style lang="scss" scoped>

.indicator {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 1px;
  background: #31AE54;
  transition: 8s;

  &.active {
    width: 100%;
  }
}

.c-xProgress {
  background: rgba(49, 174, 84, 0.3);
  height: 2px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

}

</style>
