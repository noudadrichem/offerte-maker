<template>
<div class="adres-card">


  <div v-for="(value, key) in adresData" :key="key">
    <input type="text" v-model="adresData[key]"/>
  </div>

</div>
</template>

<script>
export default {
  props: ['adresData']
}
</script>

<style lang="scss" scoped>
  .adres-card {
    width: 30%;
  }

  input {
    display: block;
    width: 100%;
  }
</style>

