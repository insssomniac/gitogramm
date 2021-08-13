<template>
  <div class="c-topline">
    <div class="global-container">
      <div class="headline">
        <slot name="headline"/>
      </div>
      <div class="content" v-if="$slots.content">
        <slot name="content"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topline'
}
</script>

<style lang="scss" scoped>

.c-topline {
  background: #FAFAFA;
  border-bottom: 1px solid #C6C6C8;
  padding: 42px 0 32px;
}

.content {
  margin-top: 37px;
}

</style>
