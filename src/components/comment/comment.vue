<template>
<div class="c-comment">
  <span class="username">{{ username }}</span>
  <a class="link" :href="url">{{ text }}</a>
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
    },
    url: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

.username{
  font-weight: bold;
  margin-right: 1em;
}

.link {
  color: inherit;
}

</style>
