import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default (props, refs) => {
  const { dispatch, state } = useStore()

  const slideNdx = ref(0)
  const sliderPosition = ref(0)
  const loading = ref(false)
  const buttonsShown = ref(true)

  const trendings = computed(() => state.repositories.trendings)

  const activeBtns = () => {
    if (buttonsShown.value === false) return []
    if (slideNdx.value === 0) return ['next']
    if (slideNdx.value === trendings.value.data.length - 1) return ['prev']
    return ['next', 'prev']
  }

  const fetchReadmeActiveSlide = () => {
    const { id, owner, name } = trendings.value.data[slideNdx.value]
    dispatch('repositories/fetchReadme', { id, owner: owner.login, repo: name })
  }

  const lastSlide = () => {
    return slideNdx.value === trendings.value.data.length - 1
  }

  const checkFollowing = () => {
    const { id } = trendings.value.data[slideNdx.value]
    dispatch('repositories/checkStatus', { id })
  }

  const loadReadme = async () => {
    loading.value = true
    buttonsShown.value = false

    try {
      await fetchReadmeActiveSlide()
      await checkFollowing()
    } catch (e) {
      console.log(e)
      throw e
    } finally {
      loading.value = false
      buttonsShown.value = true
    }
  }

  const getStoryData = (obj) => {
    return {
      id: obj.id,
      userBlockAvatar: obj.owner?.avatar_url,
      username: obj.owner.login,
      content: obj.readme,
      following: obj.following
    }
  }

  const starRepo = (id) => {
    dispatch('repositories/starRepo', { id })
  }

  const unstarRepo = (id) => {
    dispatch('repositories/unstarRepo', { id })
  }

  return {
    trendings: computed(() => state.repositories.trendings),
    slideNdx,
    sliderPosition,
    loading,
    buttonsShown,
    activeBtns,
    fetchReadmeActiveSlide,
    lastSlide,
    checkFollowing,
    loadReadme,
    getStoryData,
    starRepo,
    unstarRepo
  }
}
