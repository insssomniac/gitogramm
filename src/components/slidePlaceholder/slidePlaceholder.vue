<template>
<div class="c-slide-placeholder">
  <div class="picture-placeholder"></div>
  <div class="paragraph-placeholder">
    <div class="str-first"></div>
    <div class="str-second"></div>
    <div class="str-third"></div>
  </div>
  <div class="paragraph-placeholder">
    <div class="str-first"></div>
    <div class="str-second"></div>
    <div class="str-third"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'slidePlaceholder'
}
</script>

<style lang="scss" scoped>

.c-slide-placeholder {
  display: flex;
  flex-direction: column;
}

.picture-placeholder {
  height: 136px;
  width: 100%;
  margin-bottom: 22px;
  background: #DEDEDE;
  border-radius: 4px;
}

.paragraph-placeholder {
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;

  &:last-child {
    margin-bottom: 0;
  }
}

.str-first {
  width: 177px;
  height: 14px;
  margin-bottom: 9px;
  background: #DEDEDE;
  border-radius: 4px;
}

.str-second {
  width: 218px;
  height: 14px;
  margin-bottom: 9px;
  background: #DEDEDE;
  border-radius: 4px;
}

.str-third {
  width: 139px;
  height: 14px;
  background: #DEDEDE;
  border-radius: 4px;
}

</style>
