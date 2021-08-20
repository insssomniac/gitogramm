import slide from './slide.vue'

export default {
  title: 'slide',
  component: { slide }
}

const template = () => ({
  components: { slide },
  template: `
    <div class="background--dark">
      <slide />
    </div>
  `
})

export const Default = template.bind({})
