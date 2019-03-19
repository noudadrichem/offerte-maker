<template>
  <div class="general-info">
    <div class="headings">
      <span v-for="(heading, idx) in headings" :key="idx">
        {{ heading }}
      </span>
    </div>

    <div class="headings values">
      <span v-for="(value, key) in generalInfo" :key="key">
        <input type="text" v-model="generalInfo[key]"/>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GeneralInfo',
  props: ['generalInfo'],
  data: () => ({
    headings: [
      'Offertenummer',
      'Offertedatum',
      'Vervaldatum',
      'Btw nummer',
      'Relatienummer'
     ],
  })
}
</script>

<style lang="scss" scoped>
  .general-info {

    .headings {
      display: flex;
      font-weight: 800;
      margin-bottom: 8px;

      &.values {
        font-weight: 500;
      }

      span {
        flex: 1;
      }
    }
  }
</style>


