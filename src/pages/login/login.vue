<template>
<div class="wrapper">
  <div class="login">
    <logo class="logo" variant="logo-black" />
    <div class="text">
      More than just one repository.
      This is our digital world.
    </div>
    <x-button
        variant="button--login"
        theme="button--theme-green"
        class="login-button"
        @click="getCode"
    >
      <span class="auth-desc">Authorize with Github</span>
      <span class="icon">
        <icon name="git" />
      </span>
    </x-button>
  </div>
</div>
</template>

<script>
import { logo } from '../../components/logo'
import { icon } from '../../icons'
import { xButton } from '../../components/xButton'
import env from '../../../env'

export default {
  name: 'login',
  components: {
    logo,
    icon,
    xButton
  },
  methods: {
    getCode () {
      const githubAuthUrl = 'https://github.com/login/oauth/authorize'
      const params = new URLSearchParams()
      params.append('client_id', env.clientId)
      params.append('scope', 'repo:status read:user')

      window.location.href = `${githubAuthUrl}?${params}`
    }
  },
  async created () {
    const code = new URLSearchParams(window.location.search).get('code')
    if (code) {
      try {
        const response = await fetch('https://webdev-api.loftschool.com/github', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            clientId: env.clientId,
            code,
            clientSecret: env.clientSecret
          })
        })

        const { token } = await response.json()

        sessionStorage.setItem('token', token)
        await this.$router.replace({ name: 'feeds' })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.wrapper{
  background: #fff;
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15%;
  width: 256px;
}

.logo {
  margin-bottom: 25px;
}

.text {
  margin-bottom: 55px;
  font-size: 18px;
}

.login-button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth-desc {
  margin-right: 12px;
  font-size: 16px;
  font-weight: bold;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 23px;
  height: 23px;
  color: #fff;
}

</style>
