<template>
  <div>

    <pre><h1>{{ personalInfo.name }}</h1></pre>

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
