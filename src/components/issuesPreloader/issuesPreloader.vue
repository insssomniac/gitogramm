<template>
<div class="c-horizontal-preloader">
</div>
</template>

<script>
export default {
  name: 'issuesPreloader'
}
</script>

<style lang="scss" scoped>

.c-horizontal-preloader {
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #FFFFFF, #EAEAEA, #FFFFFF, #EAEAEA);
  background-size: 400%;
  animation: background 3s infinite running;
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
