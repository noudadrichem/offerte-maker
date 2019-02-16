<template>
  <div>
    <h3>{{ personalInfo.name }}</h3>

  </div>
</template>

<script>
export default {
  props: ['personalInfo'],
}
</script>

<style lang="scss" scoped>
  h1 {
    font-size: 4rem;
  }
</style>
