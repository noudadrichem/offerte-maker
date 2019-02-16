<template>
<div class="home">
  <div class="container">
    <!-- <PersonalInfo v-bind:personalInfo="personal"/> -->

    <GeneralInfo :generalInfo="generalInfo"/>

    <input class="page-heading" type="text" v-model="offerteTitle" placeholder="Factuur titel">
    <div class="">
      <Rows v-bind:billableTasks="billableTasks" :addRow="addRow" :btwPercent="btwPercent"/>
    </div>
  </div>
</div>
</template>

<script>
import PersonalInfo from '../components/PersonalInfo'
import Rows from '../components/rows'
import GeneralInfo from '../components/GeneralInfo'

export default {
  components: {
    PersonalInfo,
    Rows,
    GeneralInfo
  },
  methods: {
    addRow(newRow) {
      if(newRow.description !== '' && newRow.item !== '') {
        this.$set(this, 'billableTasks', [...this.billableTasks, newRow])
      }
    }
  },
  data: () => ({
    offerteTitle: '',
    companyName: 'noudadrichem',
    personal: {
      name: 'Noud Adrichem',
      kvk: '6898 2624',
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
    generalInfo: {
      offerteNumber: 0,
      currentDate: new Date().toDateString(),
      expireDate: new Date(Date.now() + 12096e5).toDateString(),
      btwNumber: 'NL249711382B01',
      relationNumber: 18001,
    },
    client: 'BWI Woensdrecht',
    offerteTo: 'Juliet Manrho',
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
    display: flex;
    flex-direction: column;
  }
</style>

