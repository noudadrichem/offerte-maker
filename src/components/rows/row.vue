<template>
  <div class="row">
    <span>{{ idx + 1}}</span>
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
    display: flex;
    align-items: flex;
    justify-content: space-between;

    &:nth-child(even) {
      box-shadow: var(--box-shadow);
      background: var(--white);
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

    span:nth-child(2) {
      flex: 3;
    }
  }
</style>
