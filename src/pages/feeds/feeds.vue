<template>
  <div class="topline">
    <topline>
      <template #headline>
        <div class="topline__container">
          <h1 class="topline__title">Gitogram /</h1>
          <logged-as avatar="https://picsum.photos/50/50" />
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
  </div>
  <div class="global-container feed-container">
    <ul class="feed">
      <li class="post" v-for="item in items" :key="item.id">
        <post >
          <template #repository-info>
            <h2 class="post__title"> {{ item.full_name }} </h2>
            <div v-if="item.description" class="post__desc"> {{ item.description }} </div>
            <post-buttons quantity="156k" own-quantity="4" />
          </template>
        </post>
      </li>
    </ul>

    <pre>{{ items }}</pre>
  </div>
</template>

<script>
import { topline } from '../../components/topline'
import { loggedAs } from '../../components/loggedAs'
import { userBlock } from '../../components/userBlock'
import { post } from '../../components/post'
import { postButtons } from '../../components/postButtons'
import users from './data.json'
import * as api from '../../api'

export default {
  name: 'feeds',
  components: {
    loggedAs,
    userBlock,
    topline,
    post,
    postButtons
  },
  data () {
    return {
      users,
      items: []
    }
  },
  methods: {
    getFeedData (item) {
      return {
        avatar: '',
        username: '',
        title: '',
        desc: '',
        quantity: '',
        ownQuantity: ''
      }
    }
  },
  async created () {
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.topline__container {
  display: flex;
  justify-content: space-between;
}

.users {
  display: flex;
  justify-content: space-between;
}

.feed-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.feed {
  display: flex;
  flex-direction: column;
  width: 80%;
}

.post {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.post__title {
  font-size: 26px;
  margin-bottom: 15px;
  line-height: 1;
}

.post__desc {
  margin-bottom: 33px;
}

</style>
