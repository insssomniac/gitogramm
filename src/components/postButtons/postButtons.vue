<template>
  <div class="c-post-buttons">
    <button class="post-button">
      <span class="icon-star">
        <icon name="star"/>
      </span>
      <span class="caption">Star</span>
    </button>
    <div class="quantity">156k</div>
    <button class="post-button">
      <span class="icon-fork">
        <icon name="fork"/>
      </span>
      <span class="caption">Fork</span>
    </button>
    <div class="own-quantity">4</div>
  </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'postButtons',
  components: {
    icon
  }
}
</script>

<style lang="scss" scoped>

.c-post-buttons {
  display: flex;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  width: 232px;
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

.quantity {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  border-left: 1px solid rgba(27, 31, 35, 0.15);
  border-right: 1px solid rgba(27, 31, 35, 0.15);
  color: #24292E;
}

.own-quantity {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  border-left: 1px solid rgba(27, 31, 35, 0.15);
  color: #24292E;
}

</style>
