<template>
<div class="home">
  <div class="container">
    <PersonalInfo v-bind:personalInfo="personal"/>

    <div class="">
      <input class="offerte-heading" type="text" v-model="offerteTitle">
      <Rows v-bind:billableTasks="billableTasks" :addRow="addRow" :btwPercent="btwPercent"/>
    </div>
  </div>
</div>
</template>

<script>
import PersonalInfo from '../components/PersonalInfo'
import Rows from '../components/rows'

export default {
  components: {
    PersonalInfo,
    Rows
  },
  methods: {
    addRow(newRow) {
      this.$set(this, 'billableTasks', [...this.billableTasks, newRow])
    }
  },
  data: () => ({
    offerteTitle: 'Enter your title',
    companyName: 'noudadrichem',
    personal: {
      name: 'Noud Adrichem',
      kvk: '6898 2624',
      btwNumber: 'NL249711382B01',
      bank: 'NL26 ABNA 0247 9036 71',
      tnv: 'N. Adrichem',
      cellphone: '+31 627 490 197',
      email: 'info@noudadrichem.com',
      adres: {
        code: '1702VN',
        city: 'HEERHUGOWAARD',
        stree: 'Coryluslaan 18'
      }
    },
    adres: {
      name: 'Brede Welzijns Instelling Woensdrecht',
      street: 'Kromstraat 4, 4631KH',
      city: 'Woensdrecht',
      country: 'NETHERLANDS',
    },
    offerteNumber: 0,
    offerteTo: 'Juliet Manrho',
    client: 'BWI Woensdrecht',
    relationNumber: 18001,
    currentDate: new Date(),
    expireDate: new Date(Date.now() + 12096e5),
    billableTasks: [],
    btwPercent: 21,
  })
}
</script>

<style lang="scss" scoped>
  .container {
    max-width: 1184px;
    padding: 0 24px;
    margin: 0 auto;
  }
</style>

