<template>
<div class="uk-container uk-container-small">
  <div class="uk-grid">
    <div class="uk-width-1-1 uk-width-2-5@m">
      <PersonalInfo v-bind:personalInfo="personal"/>
    </div>

    <br/>

    <div class="uk-width-1-1 uk-width-5@m">
      <input class="offerte-heading" type="text" v-model="offerteTitle">
      <Rows v-bind:billableTasks="billableTasks" :addRow="addRow"/>
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
      btw: 'NL249711382B01',
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
    billableTasks: []
  })
}
</script>
