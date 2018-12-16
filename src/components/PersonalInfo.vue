<template>
  <div>

    <pre><h1>{{ personalInfo.name }}</h1></pre>

  </div>
</template>

<script>
export default {
  props: ['personalInfo', ''],
}
</script>

<style lang="scss">
  h1 {
    font-size: 8rem;
  }
</style>
