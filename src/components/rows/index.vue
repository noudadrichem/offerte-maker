<template>
<div>
  <div class="row header">
    <span v-for="(value, key, idx) in headings" :key="idx">
      {{ value }}
    </span>
  </div>

  <Row v-for="(task, idx) in billableTasks" :task="task" :idx="idx" :key="idx"/>

  <div class="row add delete">
    <input type="text" v-model="newRow.item" placeholder="Item">
    <input type="text" class="omschrijving" v-model="newRow.description" placeholder="Omschrijving">
    <input type="number" v-model="newRow.units">
    <input type="number" v-model="newRow.costPerUnit">
  </div>
  <Button @click.native="addRow({...newRow})" className="delete">Add row</Button>

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
      item: '',
      description: '',
      units: 1,
      costPerUnit: 10,
    },
    headings: {
      index: 'Number',
      itemType: 'Item',
      description: 'Omschrijving',
      units: 'Uur',
      unitPrice: 'Uur prijs',
      price: 'Prijs'
    }
  })
}
</script>

<style lang="scss" scoped>
  input {
    &.omschrijving {
      flex: 2;
    }

    &[type="number"] {
      font-family: 'IBM Plex Mono', monospace;
    }
  }
</style>
