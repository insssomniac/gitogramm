import { ref } from 'vue'

export default (emit) => {
  const isOpened = ref(false)
  const toggle = () => {
    isOpened.value = !isOpened.value
    emit('onToggle', isOpened.value)
  }

  return { isOpened, toggle }
}
