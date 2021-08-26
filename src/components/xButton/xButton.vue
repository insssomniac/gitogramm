<template>
<button
    :class="[
        'c-button', 'button--theme-green',
        {'hover-text': withHoverText}, variant
    ]"
    :data-hover-text="hoverText"
>
  <span class="button__text">
    <slot></slot>
  </span>
</button>
</template>

<script>
export default {
  name: 'xButton',
  props: {
    hoverText: {
      type: String
    },
    variant: {
      type: String
    }
  },
  computed: {
    withHoverText () {
      return this.hoverText?.length
    }
  }
}
</script>

<style lang="scss" scoped>

.c-button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: url("../../assets/a-pointer.png"), auto;
}

.button--big {
  width: 218px;
  height: 36px;
}

.button--theme-green {
  background: #31AE54;
}

.button__text {
  color: #fff;
  font-weight: bold;
}

.button--big .button__text {
  font-size: 13px;
}

</style>
