<template>
  <div class="row">
    <span class="num">{{ idx + 1}}</span>
    <span>{{ task.item }}</span>
    <span>{{ task.description }}</span>
    <span class="num">{{ task.units }}</span>
    <span class="num">{{ task.costPerUnit }}</span>
    <span class="num">{{ task.units * task.costPerUnit }}</span>
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
    display: flex;
    align-items: flex;
    justify-content: space-between;

    &:nth-child(even) {
      background-color: #f2f2f2;
      /* box-shadow: var(--box-shadow); */
      /* background-color: var(--white); */
    }


    span {
      display: flex;
      flex: 1;
      padding: 8px;
    }

    &.header span {
      font-weight: 800;
    }
    /* span:first-child {
      flex: 0;
    } */

    span:nth-child(3) {
      flex: 3;
    }
  }
</style>
