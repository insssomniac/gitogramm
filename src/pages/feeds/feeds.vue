<template>
  <div class="topline">
    <topline>
      <template #headline>
        <div class="topline__container">
          <logo variant="logo-black" />
          <logged-as
              @onLogout="logOut"
              :avatar="loggedUser.avatar_url" />
        </div>
      </template>
      <template #content>
        <ul class="users">
          <li class="users__item user" v-for="item in trendingsArr" :key="item.id">
            <user-block
                :avatar="item.owner.avatar_url"
                :username="item.owner.login"
                @storyPress="$router.push({name: 'stories', params: {initialSlide: item.id}})"
            />
          </li>
        </ul>
      </template>
    </topline>
  </div>
  <div class="global-container feed-container">
    <ul class="feed">
      <li class="post" v-for="item in starredArr" :key="item.id">
        <post
            :avatar="item.owner.avatar_url"
            :username="item.owner.login"
            :date="convertDate(item.created_at)"
            :repoIssues="item.issues"
            @toggleIssues="getIssues(item.id)"
        >
          <template #repository-info>
            <h2 class="post__title"> {{ item.full_name }} </h2>
            <div v-if="item.description" class="post__desc"> {{ item.description }} </div>
            <post-buttons class="post__buttons" :stars="item.stargazers_count" :forks="item.forks" />
          </template>
        </post>
      </li>
    </ul>
  </div>
</template>

<script>
import { topline } from '../../components/topline'
import { logo } from '../../components/logo'
import { loggedAs } from '../../components/loggedAs'
import { userBlock } from '../../components/userBlock'
import { post } from '../../components/post'
import { postButtons } from '../../components/postButtons'
import { mapState, mapActions } from 'vuex'
import * as api from '../../api'

export default {
  name: 'feeds',
  components: {
    logo,
    loggedAs,
    userBlock,
    topline,
    post,
    postButtons
  },
  emits: ['storyPress', 'toggleIssues', 'onLogout'],
  data () {
    return {
      trendingsArr: [],
      starredArr: [],
      loggedUser: {}
    }
  },
  computed: {
    ...mapState({
      trendings: state => state.repositories.trendings,
      starred: state => state.repositories.starred
    })
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'repositories/fetchTrendings',
      fetchStarred: 'repositories/fetchStarred',
      fetchIssues: 'repositories/fetchIssues'
    }),
    convertDate (date) {
      const timestamp = Date.parse(date)
      const options = { day: 'numeric', month: 'long', year: 'numeric' }

      return new Intl.DateTimeFormat('en-GB', options).format(timestamp)
    },
    async getUser () {
      const token = sessionStorage.token
      if (token) {
        try {
          const response = await api.client.getUser()
          this.loggedUser = response.data
        } catch (e) {
          console.log(e)
        }
      }
    },
    async getIssues (id) {
      await this.fetchIssues({ id })
    },
    logOut () {
      sessionStorage.removeItem('token')
      document.location.reload()
    }
  },
  async created () {
    await this.fetchTrendings()
    await this.fetchStarred()
    await this.getUser()
    this.trendingsArr = this.trendings.data
    this.starredArr = this.starred.data
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

.post__buttons {
  margin-top: 33px;
}

</style>
