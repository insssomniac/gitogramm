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
  </topline>
</div>
  <div class="global-container profile-container">
    <div class="profile">
      <h2 class="title">My profile</h2>
      <user-block
        :variant="userBlockProfileVariant"
        :avatar="user.data.avatar_url"
        :username="user.data.login"
        :profile-name="user.data.name">
        <template #userInfo>
          <div class="info" @click="showRepositories">
            <span class="info__count">{{ user.data.public_repos }}</span>
            <span :class="['info__text', {active: isShowRepositories === true}]">repositories</span>
          </div>
          <div class="info" @click="showFollowing">
            <span class="info__count">{{ user.data.following }}</span>
            <span :class="['info__text', {active: isShowRepositories === false}]">following</span>
          </div>
        </template>
      </user-block>
    </div>
    <div class="content">
      <div class="show-repositories" v-if="isShowRepositories">
        <div class="preloader" v-if="userRepos.loading">
          <preloader/>
        </div>
        <div class="payload" v-else>
          <div class="content__topline">
            <div class="content__title">Repositories</div>
            <div class="content__quantity">{{ userRepos.data?.length }}</div>
          </div>
          <ul class="feed">
            <li class="post" v-for="item in userRepos.data" :key="item.id">
              <div class="repository-info">
                <a :href="item.html_url" class="post__title"> {{ item.full_name }} </a>
                <div v-if="item.description" class="post__desc"> {{ item.description }} </div>
                <post-buttons class="post__buttons" :stars="item.stargazers_count" :forks="item.forks" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="show-following" v-else>
        <div class="preloader" v-if="userFollowing.loading">
          <preloader/>
        </div>
        <div class="payload" v-else>
          <div class="content__topline">
            <div class="content__title">Following</div>
            <div class="content__quantity">{{ userFollowing.data?.length }}</div>
          </div>
          <ul class="feed">
            <li class="followed-user__item followed-user" v-for="item in userFollowing.data" :key="item.id">
              <user-block
                  :variant="userBlockListVariant"
                  :avatar="item.avatar_url"
                  :username="item.login"
                  :profile-name="item.type"
              />
              <x-button
                  class="followed-user__button"
                  variant="button--sm"
                  theme="button--theme-green"
              >
                following
              </x-button>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { logo } from '../../components/logo'
import { loggedAs } from '../../components/loggedAs'
import { topline } from '../../components/topline'
import { userBlock } from '../../components/userBlock'
import { postButtons } from '../../components/postButtons'
import { xButton } from '../../components/xButton'
import { preloader } from '../../components/preloader'
import { ref, computed, onMounted } from 'vue'

export default {
  name: 'profile',
  components: {
    logo,
    loggedAs,
    topline,
    userBlock,
    postButtons,
    xButton,
    preloader
  },
  setup () {
    const { dispatch, state } = useStore()

    const userBlockProfileVariant = 'profile-picture-big'
    const userBlockListVariant = 'followed-user-item'
    const isShowRepositories = ref(true)

    const fetchUserFollowing = () => {
      dispatch('user/fetchUserFollowing')
    }

    const showRepositories = () => {
      isShowRepositories.value = true
    }

    const showFollowing = async () => {
      isShowRepositories.value = false
      await fetchUserFollowing()
    }

    onMounted(() => {
      dispatch('user/getUser')
      dispatch('user/fetchUserRepos')
    })

    return {
      userBlockProfileVariant,
      userBlockListVariant,
      isShowRepositories,
      user: computed(() => state.user.user),
      userRepos: computed(() => state.user.userRepos),
      userFollowing: computed(() => state.user.userFollowing),
      fetchUserFollowing,
      showRepositories,
      showFollowing
    }
  }
}
</script>

<style lang="scss" scoped>
.topline__container {
  display: flex;
  justify-content: space-between;
}

.profile-container {
  display: flex;
}

.profile {
  width: 30%;
  min-width: 350px;
  padding-top: 40px;
}

.title {
  margin-bottom: 30px;
  font-size: 26px;
  line-height: 1;
  display: block;
}

.info {
  margin-right: 1em;
  font-size: 12px;
  cursor: url("../../assets/a-pointer.png"), auto;
}

.info .active {
  color: #31AE54;
}

.info__count {
  font-size: 14px;
  font-weight: bold;
  margin-right: 5px;
}

.content {
  padding-top: 40px;
  padding-left: 6%;
  width: 100%;
  border-left: 1px solid #C6C6C8;
  min-height: 100vh;
}

.content__topline {
  display: flex;
  justify-content: space-between;
  margin-bottom: 36px;
}

.content__title {
  color: #000;
  font-weight: bold;
  font-size: 26px;
  line-height: 1;
}

.content__quantity {
  font-size: 18px;
  color: #9E9E9E;
  font-weight: bold;
}

.feed {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.repository-info {
  padding: 24px 20px;
  border: 1px solid #F1F1F1;
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
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

.followed-user__item {
  margin-bottom: 32px;
}

.followed-user {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.preloader {
  width: 100%;
}

</style>
