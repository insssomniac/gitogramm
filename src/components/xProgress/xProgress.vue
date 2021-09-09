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
      isActive,
      emitOnFinish,
      setActive,
      indicator
    } = useXprogress(props, emit)

    return { isActive, emitOnFinish, setActive, indicator }
  },
  mounted () {
    if (!this.isLastSlide) {
      this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
    }
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener(
      'transitionend',
      this.emitOnFinish
    )
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
