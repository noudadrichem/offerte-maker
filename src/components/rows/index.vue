<template>
<div>
  <div class="row header">
    <span v-for="(value, key, idx) in newRow" :key="idx">
      {{ key }}
    </span>
  </div>

  <Row v-for="(task, idx) in billableTasks" :task="task" :idx="idx" :key="idx"/>
  
  <div class="row">
    <input type="text" v-model="newRow.item">
    <input type="text" v-model="newRow.description">
    <input type="number" v-model="newRow.units">
    <input type="number" v-model="newRow.costPerUnit">
    <Button @click.native="addRow({...newRow})">Add row</Button>
  </div>
</div>
</template>

<script>
import Row from './row'
import Button from '../Button'

export default {
  props: ['billableTasks', 'addRow'],
  components: { 
    Row, 
    Button 
  },
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

<style lang="scss">

</style>
