import { ref } from 'vue'

export default (props, emit) => {
  const shown = ref(false)
  const toggle = (isOpened) => {
    shown.value = isOpened
    if (props.repoIssues.data === undefined || props.repoIssues.data.length === 0) {
      emit('loadIssues')
    }
  }

  return { shown, toggle }
}
