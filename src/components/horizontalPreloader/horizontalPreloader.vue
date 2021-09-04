<template>
<div class="c-horizontal-preloader">
</div>
</template>

<script>
export default {
  name: 'horizontalPreloader'
}
</script>

<style lang="scss" scoped>

.c-horizontal-preloader {
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #FFFFFF, #D9D9D9, #FFFFFF, #D9D9D9, #FFFFFF, #D9D9D9, #FFFFFF, #D9D9D9);
  background-size: 800%;
  animation: background 4s infinite running;
}

@keyframes background {
  0% {
    background-position-x: 80%;
  }
  50% {
    background-position-x: 20%;
  }
  100% {
    background-position-x: 80%;
  }
}

</style>
