<template>
<button
    :class="[
        'c-button',
        {'hover-text': withHoverText}, variant, theme
    ]"
    :disabled="disabled"
>
  <span class="button__text">
    <span v-if="loading" class="loader">
      <preloader variant="preloader--white"/>
    </span>
    <slot v-else></slot>
  </span>
</button>
</template>

<script>

import { preloader } from '../preloader'

export default {
  name: 'xButton',
  props: {
    hoverText: {
      type: String
    },
    variant: {
      type: String
    },
    theme: {
      type: String
    },
    loading: Boolean,
    disabled: Boolean
  },
  components: {
    preloader
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

.button--sm {
  width: 115px;
  height: 42px;
}

.button--sm .button__text {
  font-size: 16px;
}

.button--big {
  width: 270px;
  height: 44px;
}

.button--login {
  width: 252px;
  height: 44px;
}

.button--theme-green {
  background: #31AE54;
}

.button--theme-grey {
  background: #9E9E9E;
}

.button__text {
  color: #fff;
  font-weight: bold;
  position: relative;
  display: flex;
  align-items: center;
}

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.button--big .button__text {
  font-size: 16px;
}

</style>
