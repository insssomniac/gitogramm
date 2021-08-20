import post from './post.vue'
import postButtons from '../postButtons/postButtons.vue'

export default {
  title: 'post',
  component: { post, postButtons }
}

const template = () => ({
  components: { post, postButtons },
  template: `
    <ul class="feed">
      <li class="post">
        <post avatar="https://picsum.photos/50/50" username="joshua_l" date="15 may">
          <template #repository-info>
            <h2 class="post__title"> Vue.js </h2>
            <div class="post__desc"> JavaScript framework for building interactive web applications ⚡ </div>
            <post-buttons class="post__buttons" stars="156k" forks="5" />
          </template>
        </post>
      </li>
    </ul>
  `
})

export const Default = template.bind({})
