<template>
<div>
  <div class="row header">
    <span v-for="(value, key, idx) in headings" :key="idx">
      {{ value }}
    </span>
  </div>

  <Row v-for="(task, idx) in billableTasks" :task="task" :idx="idx" :key="idx"/>

  <div class="row add">
    <input type="text" v-model="newRow.item">
    <input type="text" v-model="newRow.description">
    <input type="number" v-model="newRow.units">
    <input type="number" v-model="newRow.costPerUnit">
    <Button @click.native="addRow({...newRow})">Add row</Button>
  </div>

  <Total :rows="billableTasks" :btwPercent="btwPercent"/>
</div>
</template>

<script>
import Row from './row'
import Total from './total'
import Button from '../Button'

export default {
  props: ['billableTasks', 'addRow', 'btwPercent'],
  components: {
    Row,
    Button,
    Total
  },
  data: () => ({
    newRow: {
      item: 'service',
      description: 'Mauris sed sem et orci.',
      units: 2,
      costPerUnit: 35,
    },
    headings: {
      itemType: 'Item',
      description: 'Omschrijving',
      units: 'Uur',
      unitPrice: 'Uur prijs',
      price: 'Prijs'
    }
  })
}
</script>

<style lang="scss">

</style>
