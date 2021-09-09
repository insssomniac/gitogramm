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
    <div class="toggler">
      <toggler @onToggle="toggle" />
    </div>
    <div class="comments" v-if="shown">
      <div class="preloader" v-if="repoIssues.loading">
        <div class="preloader__line-first">
          <horizontal-preloader/>
        </div>
        <div class="preloader__line-second">
          <horizontal-preloader/>
        </div>
        <div class="preloader__line-third">
          <horizontal-preloader/>
        </div>
      </div>
      <div v-else>
        <ul class="comments__list"  v-if="repoIssues.data.length">
          <li class="comments__item" v-for="issue in repoIssues.data" :key="issue.id">
            <comment :username="issue.user.login" :text="issue.title" :url="issue.html_url"/>
          </li>
        </ul>
        <div v-else>
          No issues for this repository yet...
        </div>
      </div>

    </div>
    <div class="post__date">{{ date }}</div>
  </div>
</template>

<script>
import { userBlock } from '../../components/userBlock'
import { toggler } from '../toggler'
import { comment } from '../comment'
import { horizontalPreloader } from '../horizontalPreloader'
import useShowHide from '../composables/useShowHide'

export default {
  name: 'post',
  components: {
    userBlock,
    toggler,
    comment,
    horizontalPreloader
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
  },
  setup (props, { emit }) {
    const {
      shown,
      toggle
    } = useShowHide(emit)
    return { shown, toggle }
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

.toggler {
  margin-bottom: 10px;
}

.comments__list {
  margin-bottom: 10px;
}

.comments__item {
  margin-bottom: 6px;

  &:last-child {
    margin-bottom: 0;
  }
}

.preloader {
  width: 504px;

  &__line-first, &__line-second, &__line-third {
    height: 22px;
    border-radius: 4px;
  }
  &__line-first {
    width: 100%;
    margin-bottom: 5px;
  }
  &__line-second {
    width: 60%;
    margin-bottom: 5px;
  }
  &__line-third {
    width: 40%;
  }
}

.post__date {
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.4);
}

</style>
