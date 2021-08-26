import slide from './slide.vue'

export default {
  title: 'slide',
  component: { slide },
  argTypes: {
    userBlockAvatar: {
      control: { type: 'text' }
    },
    username: {
      control: { type: 'text' }
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
  userBlockAvatar: 'https://picsum.photos/50/50',
  username: 'John Doe',
  userBlockVariant: 'card'
}
