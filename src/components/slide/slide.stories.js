import slide from './slide.vue'

export default {
  title: 'slide',
  component: { slide },
  argTypes: {
    active: {
      options: [true, false],
      control: { type: 'radio' }
    },
    loading: {
      options: [true, false],
      control: { type: 'radio' }
    },
    data: {
      control: Object
    }
  }
}

const template = (args) => ({
  components: { slide },
  data () {
    return { args }
  },
  template: `
    <div class="background--dark">
    <slide v-bind="args" class="slide"/>
    </div>
  `
})

export const Default = template.bind({})

Default.args = {
  active: false,
  loading: false,
  data: {
    userBlockAvatar: 'https://picsum.photos/50/50',
    username: 'John Doe'
  }
}
