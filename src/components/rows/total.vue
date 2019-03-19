<template>
<div class="total-container">
  <div class="label-total">Subotaal excl. btw: <span class="num">&euro;{{ totalPriceEX }}</span></div>
  <div class="label-total">Btw tarief: <span class="num">{{ btwPercent }}%</span></div>
  <div class="label-total">Btw bedrag: <span class="num">&euro;{{ btwPrice }}</span></div>
  <hr/>
  <div class="label-total">SubTotaaTotaal: <span class="num">&euro;{{ totalPriceINC }}</span></div>
</div>
</template>

<script>
export default {
  name: 'Total',
  props: ['rows', 'btwPercent'],
  computed: {
    totalPriceEX() {
      const totalPriceEx = this.rows.reduce((acc, { costPerUnit, units}) =>
        acc += (costPerUnit * units)
      , 0)

      return this.valueToCurrency(totalPriceEx)
    },
    btwPrice() {
      return this.valueToCurrency(this.totalPriceEX * (this.btwPercent / 100))
    },
    totalPriceINC() {
      return this.valueToCurrency(
        parseFloat(this.totalPriceEX) + parseFloat(this.btwPrice)
      )
    }
  },
  methods: {
    valueToCurrency(val) {
      return parseFloat(val).toFixed(2)
    }
  }
}
</script>

<style lang="scss" scoped>
  .total-container {
    margin-top: 32px;
    display: flex;
    min-width: 200px;
    max-width: 30%;
    flex-direction: column;
    margin-left: auto;

    .label-total {
      margin-bottom: 4px;
      display: flex;
      justify-content: space-between;
      span.num {
        font-weight: 700;
      }
    }
  }
</style>


