<template>
<div class="c-preloader">
  <div class="icon" :class="variant">
    <icon name="preloader"></icon>
  </div>
</div>
</template>

<script>

import { icon } from '../../icons'

export default {
  name: 'preloader',
  components: {
    icon
  },
  props: {
    variant: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>

.c-preloader {
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 40px;
  height: 40px;
  animation: preloader-rotate 2s infinite linear;

}

.preloader--green {
  color: #31AE54;
}

.preloader--white {
  color: #fff;
}

@keyframes preloader-rotate {
  100% {
    transform: rotate(360deg);
  }
}

</style>
