<template>
<div class="c-comment">
  <span class="username">{{ username }}</span>
  {{ text }}
</div>
</template>

<script>
export default {
  name: 'comment',
  props: {
    username: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

.username{
  font-weight: bold;
}

</style>
