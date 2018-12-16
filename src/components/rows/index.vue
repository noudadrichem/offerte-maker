<template>
<div>
  <h1>Rowsss</h1>

  <Row v-for="(task, idx) in billableTasks" :task="task" :idx="idx" :key="idx"/>
  
  <div>

    <input type="text" v-model="item">
    <input type="text" v-model="description">
    <input type="number" v-model="units">
    <input type="text" v-model="costPerUnit">

  </div>
</div>
</template>

<script>
import Row from './row'

export default {
  props: ['billableTasks'],
  components: { Row },
  data: () => ({
    item: 'service',
    description: 'Mauris sed sem et orci fermentum sollicitudin. Quisque sit amet enim odio.',
    units: 2,
    costPerUnit: 35,
  })
}
</script>
