<template>
<div class="c-stories-slider">
  <div class="stories-container">
    <ul class="stories" ref="slider">
      <li class="stories__item" v-for="(trending, ndx) in trendings.data" :key="trending.id" ref="slide" >
        <slide
            :data="getStoryData(trending)"
            :active="slideNdx === ndx"
            :loading="slideNdx === ndx && loading"
            :buttons-shown="activeBtns()"
            :is-last-slide="lastSlide()"
            @onNextSlide="handleSlide(ndx + 1)"
            @onPrevSlide="handleSlide(ndx - 1)"
            @onProgressFinish="handleSlide(ndx + 1)"
            @onFollow="starRepo(trending.id)"
            @onUnfollow="unstarRepo(trending.id)"
        />
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import { slide } from '../slide'
import { mapActions } from 'vuex'
import useSlider from '../composables/useSlider'

export default {
  name: 'storiesSlider',
  components: {
    slide
  },
  props: {
    initialSlide: {
      type: Number
    }
  },
  setup (props, { attr, slots, emit }) {
    return { ...useSlider(props) }
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'repositories/fetchTrendings',
      checkStatus: 'repositories/checkStatus'
    }),
    moveSlide (ndx) {
      const distance = this.$refs.slide.clientWidth

      this.sliderPosition = distance * ndx
      this.$refs.slider.style.transform = `translateX(-${this.sliderPosition}px)`
      this.slideNdx = ndx
    },
    async handleSlide (ndx) {
      this.moveSlide(ndx)
      await this.loadReadme()
    }
  },
  async mounted () {
    await this.fetchTrendings()
    if (this.initialSlide) {
      const ndx = this.trendings.data.findIndex(item => item.id === this.initialSlide)
      await this.handleSlide(ndx)
    } else {
      await this.loadReadme()
    }
  }
}
</script>

<style lang="scss" scoped>

.stories-container{
  height: 660px;
  position: relative;
}

.stories {
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  margin-left: -188px;
  transition: .4s;
}

.stories__item {

}

</style>
