<template>
<div class="c-slide">
  <div class="slide__topline">
    <div class="slide__progress">
      <x-progress class="x-progress"/>
    </div>
    <user-block-small avatar="https://picsum.photos/50/50" username="React.reposit" variant="card" class="slide__userblock" />
  </div>
  <div class="slide__body"></div>
  <div class="slide__footer">
  </div>
</div>
</template>

<script>
import userBlockSmall from '../userBlockSmall/userBlockSmall'
import xProgress from '../xProgress/xProgress'

export default {
  name: 'slide',
  components: {
    xProgress,
    userBlockSmall
  }
}
</script>

<style lang="scss" scoped>

.c-slide {
  display: flex;
  flex-direction: column;
  height: 667px;
  width: 375px;
  border-radius: 8px;
  background: #FFFFFF;
}

.slide__topline {
  display: flex;
  flex-direction: column;
  height: 67px;
  width: 100%;
  background: rgba(0, 0, 0, 0.0001);
  padding-top: 10px;
  border-bottom: 1px solid #DEDEDE;
}

.slide__progress {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 12px;
}

.slide__userblock {
  margin-left: 12px;
  margin-bottom: 12px;
}

.x-progress {
  width: 95%;
}

.slide__body {
  overflow: hidden;
  flex-grow: 1;
}

.slide__footer {
  height: 100px;
  border-top: 1px solid #DEDEDE;;
}

</style>
