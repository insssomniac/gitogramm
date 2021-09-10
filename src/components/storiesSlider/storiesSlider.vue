<template>
<div class="c-stories-slider">
  <div class="stories-container">
    <ul class="stories" ref="slider">
      <li class="stories__item" v-for="(trending, ndx) in trendings" :key="trending.id" ref="slide" >
        <slide
            :data="getStoryData(trending)"
            :active="slideNdx === ndx"
            :loading="slideNdx === ndx && loading"
            :buttons-shown="activeBtns"
            :is-last-slide="lastSlide"
            @onNextSlide="handleSlide(ndx + 1)"
            @onPrevSlide="handleSlide(ndx - 1)"
            @onProgressFinish="handleSlide(ndx + 1)"
            @onFollow="starRepo"
            @onUnfollow="unstarRepo"
        />
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import { slide } from '../slide'
import { mapState, mapActions } from 'vuex'
// import useSlider from '../composables/useSlider'
import { ref } from 'vue'

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
  setup (props, { attr, slots, emit, refs }) {
    const slideNdx = ref(0)
    const sliderPosition = ref(0)
    const loading = ref(false)
    const buttonsShown = ref(true)

    return { slideNdx, sliderPosition, loading, buttonsShown }
  },
  computed: {
    ...mapState({
      trendings: state => state.repositories.trendings.data
    }),
    activeBtns () {
      if (this.buttonsShown === false) return []
      if (this.slideNdx === 0) return ['next']
      if (this.slideNdx === this.trendings.length - 1) return ['prev']
      return ['next', 'prev']
    },
    lastSlide () {
      return this.slideNdx === this.trendings.length - 1
    }
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'repositories/fetchTrendings',
      fetchReadme: 'repositories/fetchReadme',
      starRepo: 'repositories/starRepo',
      unstarRepo: 'repositories/unstarRepo',
      checkStatus: 'repositories/checkStatus'
    }),
    async fetchReadmeActiveSlide () {
      const { id, owner, name } = this.trendings[this.slideNdx]
      await this.fetchReadme({ id, owner: owner.login, repo: name })
    },
    async checkFollowing () {
      const { id } = this.trendings[this.slideNdx]
      await this.checkStatus({ id })
    },
    async loadReadme () {
      this.loading = true
      this.buttonsShown = false

      try {
        await this.fetchReadmeActiveSlide()
        await this.checkFollowing()
      } catch (e) {
        console.log(e)
        throw e
      } finally {
        this.loading = false
        this.buttonsShown = true
      }
    },
    getStoryData (obj) {
      return {
        id: obj.id,
        userBlockAvatar: obj.owner?.avatar_url,
        username: obj.owner.login,
        content: obj.readme,
        following: obj.following
      }
    },
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
      const ndx = this.trendings.findIndex(item => item.id === this.initialSlide)
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
