import topline from './topline.vue'
import loggedAs from '../loggedAs/loggedAs'
import userBlock from '../storyBlock/storyBlock'

export default {
  title: 'topline',
  component: { topline, loggedAs, userBlock }
}

const template = () => ({
  components: { topline, loggedAs, userBlock },
  template: `
    <topline>
    <template #headline>
      <div class="topline__container">
        <h1 class="topline__title">Gitogram /</h1>
        <loggedAs avatar="https://picsum.photos/50/50" />
      </div>
    </template>
    <template #content>
      <ul class="users">
        <li class="users__item user" v-for="user in users" :key="user.id">
          <user-block
              :avatar="user.avatar"
              :username="user.username"
          />
        </li>
      </ul>
    </template>
    </topline>
  `
})

export const Default = template.bind({})
