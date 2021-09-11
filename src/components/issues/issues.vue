<template>
  <div class="c-issues">
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
  </div>
</template>

<script>
import { toggler } from '../toggler'
import { comment } from '../comment'
import { horizontalPreloader } from '../horizontalPreloader'
import useShowHide from '../composables/useShowHide'

export default {
  name: 'issues',
  components: {
    toggler,
    comment,
    horizontalPreloader
  },
  props: {
    repoIssues: {
      type: Object,
      default: () => ({})
    }
  },
  setup (props, { emit }) {
    const {
      shown,
      toggle
    } = useShowHide(props, emit)
    return { shown, toggle }
  }
}
</script>

<style lang="scss" scoped>

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

</style>
