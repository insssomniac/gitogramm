<template>
<div class="wrapper">
  <header class="header">
    <div class="global-container stories-container">
      <button class="logo">
        <logo variant="logo-white" />
      </button>
      <button class="btn-close">
        <icon name="close" />
      </button>
    </div>
  </header>
  <div class="content">
    <stories-slider />
  </div>
</div>
</template>

<script>
import { logo } from '../../components/logo'
import { icon } from '../../icons'
import { storiesSlider } from '../../components/storiesSlider'

export default {
  name: 'stories',
  components: {
    logo,
    icon,
    storiesSlider
  }
}
</script>

<style lang="scss" scoped>

.wrapper{
  background: #000;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.stories-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
  width: 100%;
}

.header {
  display: flex;
  margin-top: 48px;
}

.btn-close {
  display: flex;
  align-items: center;
  width: 23px;
  height: 23px;
  color: #fff;
  cursor: url("../../assets/a-pointer.png"), auto;
}

.content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
