<template>
  <div class="c-logged-as">
    <button class="icon">
      <icon name="home"/>
    </button>
    <div class="avatar">
      <img :src="avatar" alt="user avatar" class="avatar__pic">
    </div>
    <button @click="$emit('onLogout')" class="icon">
      <icon name="exit"/>
    </button>
  </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'loggedInBlock',
  components: {
    icon
  },
  props: {
    avatar: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

.c-logged-as {
  display: flex;
  align-items: center;
}

.icon {
  display: flex;
  align-items: center;
  width: 25px;
  height: 25px;
  color: #262626;
  margin-right: 25px;
  cursor: url("../../assets/a-pointer.png"), auto;

  &:last-child {
    margin-right: 0;
  }
}

.avatar {
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  width: 37px;
  height: 37px;
  margin-right: 25px;
}

.avatar__pic {
  width: 100%;
  height: 100%;
  position: absolute;
}

</style>
