<template>
  <div class="c-post">
    <div class="user-block">
      <user-block-small
          avatar="https://picsum.photos/50/50"
          username="John Doe"
      />
    </div>
    <div class="repository-info">
      <slot name="repository-info"/>
    </div>
    <div class="toggler">
      <toggler @onToggle="toggle" />
    </div>
    <div class="comments" v-if="shown">
      <ul class="comments__list">
        <li class="comments__item" v-for="n in 5" :key="n">
          <comment username="joshua_l" text="Enable performance measuring in production, at the user's request"/>
        </li>
      </ul>
    </div>
    <div class="date">15 may</div>
  </div>
</template>

<script>
import { userBlockSmall } from '../../components/userBlockSmall'
import { toggler } from '../toggler'
import { comment } from '../comment'

export default {
  name: 'post',
  components: {
    userBlockSmall,
    toggler,
    comment
  },
  data () {
    return {
      shown: false
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
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

.date {
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.4);
}

</style>
