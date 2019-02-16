<template>
  <div class="row">
    <!-- <span>{{ idx + 1}}</span> -->
    <span>{{ task.item }}</span>
    <span>{{ task.description }}</span>
    <span>{{ task.units }}</span>
    <span>{{ task.costPerUnit }}</span>
    <span>{{ task.units * task.costPerUnit }}</span>
  </div>
</template>

<script>
export default {
  props: ['task', 'idx'],
}
</script>

<style lang="scss">
  .row {
    width: 100%;
    background: #f2f2f2;
    margin: 4px 0;
    display: flex;
    align-items: flex;
    justify-content: space-between;


    span {
      display: flex;
      flex: 1;
      padding: 8px;
    }

    &.header span {
      font-family: 800;
    }
    /* span:first-child {
      flex: 0;
    } */

    span:nth-child(2) {
      flex: 3;
    }
  }
</style>
