import slide from './slide.vue'

export default {
  title: 'slide',
  component: { slide },
  argTypes: {
    active: {
      control: { type: 'boolean' }
    },
    loading: {
      control: { type: 'boolean' }
    },
    data: {
      control: { type: 'object' }
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
    <slide v-bind="args" class="slide" data/>
    </div>
  `
})

export const Default = template.bind({})

Default.args = {
  active: false,
  loading: false,
  data: {
    id: '123',
    userBlockAvatar: 'https://picsum.photos/50/50',
    username: 'John Doe',
    content: "<p><img src=\"https://picsum.photos/900/500\" alt=\"article picture\"></p>\n<p>The easiest way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.</p>\n<p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>\n<p>In Preview 4 we enable push/pop navigation with NavigationPage. We added a concrete implementation of IWindow, and completed porting ContentPage from Xamarin.Forms</p>\n<p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>"
  }
}
