import preloader from './preloader.vue'

export default {
  title: 'preloader',
  component: { preloader }
}

const template = () => ({
  components: { preloader },
  template: `
    <div class="preloader">
      <preloader/>
    </div>
    
  `
})

export const Default = template.bind({})
