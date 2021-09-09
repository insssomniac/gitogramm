<template>
  <button class="c-story-block" @click="$emit('storyPress')">
    <span class="avatar">
      <img :src="avatar" class="img" alt="username avatar">
    </span>
    <span class="username">{{ username }}</span>
  </button>
</template>

<script>
export default {
  name: 'storyBlock',
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  },
  emits: ['storyPress']
}
</script>

<style lang="scss" scoped>

.c-story-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  cursor: url("../../assets/a-pointer.png"), auto;
}

.avatar {
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  width: 80px;
  height: 80px;
  background: #FAFAFA;
  border: 2px solid #A6328D;
  margin-bottom: 8px;

  &:hover {
    border: 2px solid transparent;
  }
}

.img {
  width: 90%;
  height: 90%;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.username {
  display: flex;
  justify-content: center;
  font-size: 12px;
}

</style>
