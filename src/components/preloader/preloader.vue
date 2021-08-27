<template>
<div class="c-preloader">
  <div class="icon">
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
  }
}
</script>

<style lang="scss" scoped>

.c-preloader {
  display: flex;
  width: 100%;
  margin-top: 70%;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 40px;
  height: 40px;
  animation: preloader-rotate 2s infinite linear;
  color: #31AE54;
}

@keyframes preloader-rotate {
  100% {
    transform: rotate(360deg);
  }
}

</style>
