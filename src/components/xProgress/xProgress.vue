<template>
<div class="c-xProgress">
  <div ref="indicator" class="indicator"></div>
</div>
</template>

<script>
export default {
  name: 'xProgress.vue',
  props: {
    active: Boolean
  },
  emits: ['onFinish'],
  methods: {
    emitOnFinish () {
      this.$emit('onFinish')
    }
  },
  mounted () {
    setTimeout(
      this.$refs.indicator.style.width = '100%',
      1000
    )
    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
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
  width: 0;
  background: #31AE54;
  transition: 5s;
}

.c-xProgress {
  background: rgba(49, 174, 84, 0.3);
  height: 2px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

}

</style>
