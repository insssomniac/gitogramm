<template>
  <div class="topline">
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
  </div>
  <div class="global-container feed-container">
    <post class="feed">
      <template #repository-info>
        <h2 class="post__title">Vue.js</h2>
        <div class="post__desc"><b>JavaScript</b> framework for building interactive web applications ⚡</div>
        <postButtons/>
      </template>
    </post>
  </div>
</template>

<script>
import { topline } from '../../components/topline'
import { loggedAs } from '../../components/loggedAs'
import { userBlock } from '../../components/userBlock'
import { post } from '../../components/post'
import { postButtons } from '../../components/postButtons'
import users from './data.json'

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
      users
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
  justify-content: center;
}

.feed {
  display: flex;
  flex-direction: column;
  width: 80%;
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
