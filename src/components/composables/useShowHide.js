import { ref } from 'vue'

export default (emit) => {
  const shown = ref(false)
  const toggle = (isOpened) => {
    shown.value = isOpened
    emit('toggleIssues')
  }

  return { shown, toggle }
}
