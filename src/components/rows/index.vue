<template>
<div>
  <h1>Rowsss</h1>

  <Row v-for="(task, idx) in billableTasks" :task="task" :idx="idx" :key="idx"/>
  
  <div>

    <input type="text" v-model="newRow.item">
    <input type="text" v-model="newRow.description">
    <input type="number" v-model="newRow.units">
    <input type="text" v-model="newRow.costPerUnit">
    <button @click="addRow(newRow)">ADD</button>

  </div>
</div>
</template>

<script>
import Row from './row'

export default {
  props: ['billableTasks', 'addRow'],
  components: { Row },
  data: () => ({
    newRow: {
      item: 'service',
      description: 'Mauris sed sem et orci.',
      units: 2,
      costPerUnit: 35,
    }
  })
}
</script>
