import horizontalPreloader from './horizontalPreloader.vue'

export default {
  title: 'horizontalPreloader',
  component: { horizontalPreloader }
}

const template = () => ({
  components: { horizontalPreloader },
  template: `
    <div class="horizontal-preloader">
      <horizontal-preloader />
    </div>
      
  `
})

export const Default = template.bind({})
