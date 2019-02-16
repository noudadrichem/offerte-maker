<template>
<div>
  <div class="label-total">Subotaal ex BTW: <span>{{ totalPriceEX }}</span></div>
  <div class="label-total">BTW tarief: <span>{{ btwPercent }}</span></div>
  <div class="label-total">BTW bedrag: <span>{{ btwPrice }}</span></div>

  <div class="label-total">SubTotaaTotaal: <span>{{ totalPriceINC }}</span></div>
</div>
</template>

<script>
export default {
  name: 'Total',
  props: ['rows', 'btwPercent'],
  computed: {
    totalPriceEX() {
      return this.rows.reduce((acc, { costPerUnit, units}) =>
        acc += (costPerUnit * units)
      , 0)
    },
    btwPrice() {
      return this.totalPriceEX * (this.btwPercent / 100)
    },
    totalPriceINC() {
      return this.totalPriceEX + this.btwPrice
    }
  }
}
</script>

