<template>
  <div :class="['c-logo', variant]" @click="$router.push({name: 'feeds'})">Gitogram /</div>
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
  cursor: url("../../assets/a-pointer.png"), auto;
}

.logo-black { // variant
  color: #292929;
}

.logo-white {
  color: #fff;
}

</style>
