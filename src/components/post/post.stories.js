import post from './post.vue'
import postButtons from '../postButtons/postButtons.vue'

export default {
  title: 'post',
  component: { post, postButtons }
}

const template = () => ({
  components: { post, postButtons },
  template: `
    <post class="feed post">
    <template #repository-info>
      <h2 class="post__title">Vue.js</h2>
      <div class="post__desc"><b>JavaScript</b> framework for building interactive web applications ⚡</div>
      <postButtons quantity="156k" own-quantity="4"/>
    </template>
    </post>
  `
})

export const Default = template.bind({})
