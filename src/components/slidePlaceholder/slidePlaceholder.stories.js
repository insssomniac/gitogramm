import slidePlaceholder from './slidePlaceholder.vue'

export default {
  title: 'slidePlaceholder',
  component: { slidePlaceholder }
}

const template = () => ({
  components: { slidePlaceholder },
  template: `
    <slidePlaceholder/>
  `
})

export const Default = template.bind({})
