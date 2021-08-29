<template>
<div class="c-slide" :class="{ active }">
  <div class="slide__topline">
    <div v-if="active" class="slide__progress">
      <x-progress
          class="x-progress"
          @onFinish="$emit('onProgressFinish')"
          :is-last-slide="isLastSlide"
      />
    </div>
    <user-block-small :avatar="data.userBlockAvatar" :username="data.username" variant="card" class="slide__userblock" />
  </div>
  <div class="slide__body">
    <div v-if="loading" class="loader">
      <preloader/>
    </div>
    <div class="info" v-else>
      <div v-if="data.content?.length" class="content" v-html="data.content"></div>
      <slidePlaceholder v-else />
    </div>
  </div>
  <div class="slide__footer">
    <x-button class="slide__button" variant="button--big">Follow</x-button>
  </div>
  <template v-if="active">
    <button v-if="buttonsShown.includes('prev')" class="slide__arrow btn-prev" @click="$emit('onPrevSlide')">
      <span class="icon">
        <icon name="arrow-left" />
      </span>
    </button>
    <button v-if="buttonsShown.includes('next')" class="slide__arrow btn-next" @click="$emit('onNextSlide')">
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
import { preloader } from '../preloader'

export default {
  name: 'slide',
  components: {
    xProgress,
    userBlockSmall,
    xButton,
    slidePlaceholder,
    icon,
    preloader
  },
  emits: ['onPrevSlide', 'onNextSlide', 'onProgressFinish'],
  props: {
    active: Boolean,
    loading: Boolean,
    isLastSlide: {
      type: Boolean,
      default: false
    },
    buttonsShown: {
      type: Array,
      default: () => ['next', 'prev']
    },
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>

.c-slide {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 668px;
  width: 376px;
  border-radius: 8px;
  background: #FFFFFF;
  transform: scale(0.8);

  &.active {
    transform: scale(1);
    z-index: 100;
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
  overflow-y: auto;
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
  height: 100px;
  min-height: 100px;
  border-top: 1px solid #DEDEDE;;
}

.slide__button{
  margin-top: 24px;
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
  background: #fff;

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
  left: -15%;
  transform: translate(0, -50%);
}

.btn-next {
  top: 50%;
  right: -15%;
  transform: translate(0, -50%);
}

</style>
