<template>
<div class="c-user-block-small" :class="variant">
  <div class="avatar">
    <img :src="avatar" class="img" alt="username avatar">
  </div>
  <div class="username">{{ username }}</div>
</div>
</template>

<script>
export default {
  name: 'userBlockSmall',
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    variant: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>

.c-user-block-small {
  display: flex;
  align-items: center;
}

.avatar {
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  width: 44px;
  height: 44px;
  border: none;
  margin-right: 14px;
}

.card .avatar {
  width: 33px;
  height: 33px;
}

.img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.username {
  font-weight: bold;
  font-size: 18px;
}

.card .username {
  font-size: 14px;
}

</style>
