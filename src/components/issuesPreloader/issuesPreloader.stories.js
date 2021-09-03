import issuesPreloader from './issuesPreloader.vue'

export default {
  title: 'issuesPreloader',
  component: { issuesPreloader }
}

const template = () => ({
  components: { issuesPreloader },
  template: `
    <div class="horizontal-preloader">
      <issues-preloader />
    </div>
      
  `
})

export const Default = template.bind({})
