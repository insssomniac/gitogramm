<template>
<div class="c-slide" :class="{ active }">
  <div class="slide__topline">
    <div v-if="active" class="slide__progress">
      <x-progress class="x-progress"/>
    </div>
    <user-block-small :avatar="userBlockAvatar" :username="username" variant="card" class="slide__userblock" />
  </div>
  <div class="slide__body">
    <div v-if="loading" class="loader"></div>
    <div class="info" v-else>
      <div v-if="data.content?.length" class="content" v-html="data.content"></div>
      <slidePlaceholder v-else />
    </div>
  </div>
  <div class="slide__footer">
    <x-button class="slide__button" variant="button--big">Follow</x-button>
  </div>
  <template v-if="active">
    <button class="slide__arrow btn-prev">
      <span class="icon">
        <icon name="arrow-left" />
      </span>
    </button>
    <button class="slide__arrow btn-next">
      <span class="icon">
        <icon name="arrow-right" />
      </span>
    </button>
  </template>
</div>
</template>

<script>
import { slidePlaceholder } from '../slidePlaceholder'
import { xButton } from '../xButton'
import { xProgress } from '../xProgress'
import { userBlockSmall } from '../userBlockSmall'
import { icon } from '../../icons'

export default {
  name: 'slide',
  components: {
    xProgress,
    userBlockSmall,
    xButton,
    slidePlaceholder,
    icon
  },
  props: {
    userBlockAvatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    active: Boolean,
    loading: Boolean,
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

.c-slide {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 538px;
  width: 302px;
  border-radius: 8px;
  background: #FFFFFF;

  &.active {
    transform: scale(1.1);
  }
}

.slide__topline {
  display: flex;
  flex-direction: column;
  height: 67px;
  width: 100%;
  background: rgba(0, 0, 0, 0.0001);
  padding-top: 10px;
  border-bottom: 1px solid #DEDEDE;
}

.slide__progress {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 12px;
}

.slide__userblock {
  margin-left: 12px;
  margin-bottom: 12px;
}

.x-progress {
  width: 95%;
}

.slide__body {
  overflow: auto;
  padding: 2% 5%;
  height: 100%;

  // moz scrollbar
  scrollbar-color: #AFAFAF #fff;
  scrollbar-width: thin;
}

.slide__body p {
  margin: 1em 0;
}

.slide__footer {
  display: flex;
  justify-content: center;
  height: 80px;
  min-height: 80px;
  border-top: 1px solid #DEDEDE;;
}

.slide__button{
  margin-top: 20px;
}

.slide__arrow {
  position: absolute;
  border-radius: 50%;
  border: 2px solid #000000;
  width: 38px;
  height: 38px;
  cursor: url("../../assets/a-pointer.png"), auto;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    .icon {
      color: #31AE54;
    }
  }
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
}

.btn-prev {
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
}

.btn-next {
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
}

</style>
