<template>
<div class="c-stories-slider">
  <div class="stories-container">
    <slide active user-block-avatar="https://picsum.photos/50/50" username="Jonny" userBlockVariant="card" data="{}"/>
  </div>
</div>
</template>

<script>
import { slide } from '../slide'

export default {
  name: 'storiesSlider',
  components: {
    slide
  }
}
</script>

<style lang="scss" scoped>

</style>
