<template>
<div class="c-user-block" :class="variant">
  <div class="avatar">
    <img :src="avatar" class="img" alt="username avatar">
  </div>
  <div class="content">
    <div class="username">{{ username }}</div>
    <div class="user-info" v-if="$slots.userInfo">
      <slot name="userInfo"></slot>
    </div>
    <div class="profile-name" v-if="profileName"> {{ profileName }} </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'userBlock',
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
    },
    profileName: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>

.c-user-block {
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

.profile-picture-big .avatar {
  width: 90px;
  height: 90px;
}

.profile-picture-big .username {
  font-size: 24px;
  line-height: 1;
  margin-bottom: 5px;
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

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.user-info {
  display: flex;
  margin-bottom: 5px;
}

.username {
  font-weight: bold;
  font-size: 18px;
}

.card .username {
  font-size: 14px;
}

.followed-user-item .username {
  font-size: 18px;
  font-weight: normal;
}

.followed-user-item .avatar {
  width: 72px;
  height: 72px;
}

.followed-user-item .profile-name {
  font-size: 12px;
}

.profile-name {
  color: #9E9E9E;
  font-size: 14px;
  line-height: 1;
}

</style>
