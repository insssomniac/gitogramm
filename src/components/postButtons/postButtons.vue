<template>
  <div class="c-post-buttons">
    <button class="post-button">
      <span class="icon-star">
        <icon name="star"/>
      </span>
      <span class="caption">Star</span>
    </button>
    <div class="post-stars">{{ stars }}</div>
    <button class="post-button">
      <span class="icon-fork">
        <icon name="fork"/>
      </span>
      <span class="caption">Fork</span>
    </button>
    <div class="post-forks">{{ forks }}</div>
  </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'postButtons',
  components: {
    icon
  },
  props: {
    stars: {
      type: Number,
      required: true
    },
    forks: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

.c-post-buttons {
  display: inline-flex;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  overflow: hidden;
}

.post-button {
  display: flex;
  width: 72px;
  align-items: center;
  justify-content: center;
  background: #FAFBFC;
  cursor: url("../../assets/a-pointer.png"), auto;
  color: #24292E;
  border-right: 1px solid rgba(27, 31, 35, 0.15);
}

.icon-star, .icon-fork {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #586069;
  margin-right: 5px;
}

.icon-star {
  width: 15px;
  height: 15px;
}

.icon-fork {
  width: 12px;
  height: 12px;
}

.post-stars {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 12px;
  border-right: 1px solid rgba(27, 31, 35, 0.15);
  color: #24292E;
}

.post-forks {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 12px;
  color: #24292E;
}

</style>
