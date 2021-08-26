<template>
  <div :class="['c-logo', variant]">Gitogram /</div>
</template>

<script>
export default {
  name: 'logo',
  props: {
    variant: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>

.c-logo {
  font-size: 32px;
  font-weight: bold;
}

.logo-black { // variant
  color: #292929;
}

.logo-white {
  color: #fff;
}

</style>
