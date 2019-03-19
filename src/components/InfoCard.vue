<template>
  <div class="info-card">
    <div v-for="(value, key) in data" :key="key">
      {{ key }} : {{ value }}
    </div>
  </div>
</template>

<script>
  export default {
    props: ['data']
  }
</script>

<style lang="scss" scoped>

</style>
