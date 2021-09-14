<template>
  <div class="topline">
    <topline>
      <template #headline>
        <div class="topline__container">
          <logo variant="logo-black" />
          <logged-as
              :avatar="user.data.avatar_url" />
        </div>
      </template>
      <template #content>
        <ul class="users">
          <li class="users__item user" v-for="item in trendings.data" :key="item.id">
            <story-block
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
      <li class="post" v-for="item in starred.data" :key="item.id">
        <post
            :avatar="item.owner.avatar_url"
            :username="item.owner.login"
            :date="convertDate(item.created_at)"
            :repoIssues="item.issues"
            @loadContent="getIssues(item)"
        >
          <template #repository-info>
            <a :href="item.html_url" class="post__title"> {{ item.full_name }} </a>
            <div v-if="item.description" class="post__desc"> {{ item.description }} </div>
            <post-buttons
                class="post__buttons"
                :stars="item.stargazers_count"
                :forks="item.forks"
                starred
                @unstar="unstarRepo(item.id)"
            />
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
import { storyBlock } from '../../components/storyBlock'
import { post } from '../../components/post'
import { postButtons } from '../../components/postButtons'
import { useStore } from 'vuex'
import { onMounted, computed } from 'vue'

export default {
  name: 'feeds',
  components: {
    logo,
    loggedAs,
    storyBlock,
    topline,
    post,
    postButtons
  },
  setup () {
    const { dispatch, state } = useStore()

    const getIssues = (item) => {
      // console.log(item)
      dispatch('repositories/fetchIssues', { item })
    }

    const convertDate = (date) => {
      const timestamp = Date.parse(date)
      const options = { day: 'numeric', month: 'long', year: 'numeric' }

      return new Intl.DateTimeFormat('en-GB', options).format(timestamp)
    }

    onMounted(() => {
      dispatch('repositories/fetchTrendings')
      dispatch('repositories/fetchStarred')
      dispatch('user/getUser')
    })

    const unstarRepo = async (id) => {
      await dispatch('repositories/unstarRepo', { id })
      await dispatch('repositories/fetchStarred')
    }

    return {
      trendings: computed(() => state.repositories.trendings),
      starred: computed(() => state.repositories.starred),
      user: computed(() => state.user.user),
      getIssues,
      convertDate,
      unstarRepo
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
  text-decoration: none;
  display: block;
  color: #000;
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 15px;
  line-height: 1;
  cursor: url("../../assets/a-pointer.png"), auto;
}

.post__buttons {
  margin-top: 33px;
}

</style>
