<template>
  <div class="c-post">
    <div class="user-block">
      <user-block
          :avatar="avatar"
          :username="username"
      />
    </div>
    <div class="repository-info">
      <slot name="repository-info"/>
    </div>
    <issues
      :repo-issues="repoIssues"
      @toggleIssues="$emit('loadContent')"
    />
    <div class="post__date">{{ date }}</div>
  </div>
</template>

<script>
import { userBlock } from '../../components/userBlock'
import { issues } from '../issues'

export default {
  name: 'post',
  components: {
    userBlock,
    issues
  },
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    repoIssues: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>

.c-post {
  padding-top: 32px;
}

.user-block {
  margin-bottom: 16px;
  height: 44px;
}

.repository-info {
  padding: 24px 20px;
  border: 1px solid #F1F1F1;
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  margin-bottom: 18px;
}

.post__date {
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.4);
}

</style>
