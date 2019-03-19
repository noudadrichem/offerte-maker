<template>
<div class="home">
  <div class="container" ref="page">

    <UploadLogo/>

    <input class="page-heading" type="text" v-model="offerteTitle" placeholder="Factuur titel">

    <div class="adres-cards">
      <AdresCard :adresData="companyTo"/>
      <AdresCard :adresData="companyFrom"/>
    </div>

    <GeneralInfo :generalInfo="generalInfo"/>

    <div class="">
      <Rows v-bind:billableTasks="billableTasks" :addRow="addRow" :btwPercent="btwPercent"/>
    </div>
  </div>
  <button @click="exportToPDF" class="delete">EXPORT</button>
</div>
</template>

<script>
import html2canvas from 'html2canvas'


import PersonalInfo from '../components/PersonalInfo'
import Rows from '../components/rows'
import GeneralInfo from '../components/GeneralInfo'
import AdresCard from '../components/AdresCard'
import UploadLogo from '../components/UploadLogo'

export default {
  components: {
    PersonalInfo,
    Rows,
    GeneralInfo,
    AdresCard,
    UploadLogo
  },
  methods: {
    addRow(newRow) {
      if(newRow.description !== '' && newRow.item !== '') {
        this.$set(this, 'billableTasks', [...this.billableTasks, newRow])
      }
    },

    exportToPDF(fileType, showDevice, showHotspots, marginValue) {
      const canvasElement = this.$refs.page
      const Jspdf = require('jspdf')

      document.querySelectorAll('.delete').forEach(node => {
        node.remove();
      })

      html2canvas(canvasElement)
        .then(canvas => {
          const imgDataUrl = canvas.toDataURL(`image/jpeg`)
          const pdf = new Jspdf('p', 'pt')
          const docWidth = pdf.internal.pageSize.getWidth();
          const imageHeight = parseInt(getComputedStyle(this.$refs.page).height) / 2
          pdf.addImage(canvas, `jpeg`, 0, 0, docWidth, imageHeight)
          pdf.save('download.pdf')
        })



    }
  },
  data: () => ({
    offerteTitle: '',
    billableTasks: [],
    btwPercent: 21,
    companyFrom: {
      name: 'Employer name',
      companyName: 'Company name',
      kvk: 'KVK Number',
      bank: 'NL00 ABCD 01234 5678 90',
      tnv: 'Name from',
      cellphone: '+31 612 34 56 78',
      email: 'john.doe@email.com',
      code: 'Zip code',
      city: 'City name',
      street: 'Street name',
      country: 'Country',
    },
    companyTo: {
      companyName: 'Company name',
      name: 'Name contactperson',
      street: 'Adres',
      code: 'Client Zip Code + City',
      country: 'Country',
    },
    generalInfo: {
      offerteNumber: 0,
      currentDate: new Date().toDateString(),
      expireDate: new Date(Date.now() + 12096e5).toDateString(),
      btwNumber: 'BTW Number',
      relationNumber: 1901,
    },
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

    .adres-cards {
      display: flex;
      justify-content: space-between;
    }
  }
</style>

