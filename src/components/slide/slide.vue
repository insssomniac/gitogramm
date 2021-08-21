<template>
<div class="c-slide">
  <div class="slide__topline">
    <div class="slide__progress">
      <x-progress class="x-progress"/>
    </div>
    <user-block-small avatar="https://picsum.photos/50/50" username="React.reposit" variant="card" class="slide__userblock" />
  </div>
  <div class="slide__body">
      <p>
        <img src="https://picsum.photos/900/500" alt="article picture">
      </p>
      <p>
        The easiest way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.
      </p>
      <p>
        For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.
      </p>
      <p>
        In Preview 4 we enable push/pop navigation with NavigationPage. We added a concrete implementation of IWindow, and completed porting ContentPage from Xamarin.Forms
      </p>
      <p>
        For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.
      </p>
  </div>
  <div class="slide__footer">
    <x-button class="slide__button" variant="button--big">Follow</x-button>
  </div>
</div>
</template>

<script>
import userBlockSmall from '../userBlockSmall/userBlockSmall'
import xProgress from '../xProgress/xProgress'
import xButton from '../xButton/xButton'

export default {
  name: 'slide',
  components: {
    xProgress,
    userBlockSmall,
    xButton
  }
}
</script>

<style lang="scss" scoped>

.c-slide {
  display: flex;
  flex-direction: column;
  height: 667px;
  width: 375px;
  border-radius: 8px;
  background: #FFFFFF;
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
  flex-grow: 1;
  padding: 0 5%;

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

</style>
