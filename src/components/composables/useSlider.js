import { ref } from 'vue'

export default () => {
  const slideNdx = ref(0)
  const sliderPosition = ref(0)
  const loading = ref(false)
  const buttonsShown = ref(true)

  return { slideNdx, sliderPosition, loading, buttonsShown }
}
