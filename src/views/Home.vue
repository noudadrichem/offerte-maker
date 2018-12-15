<template>
<div class="uk-container uk-container-small">

  <vk-grid class="uk-child-width-1-2@s uk-child-width-1-2@m ">
      <vk-card>
        <ul>
          <li>noudadrichem</li>
          <li>Coryluslaan 18 1702VN Heerhugowaard</li>
          <li>kvk: 6898 2624</li>
          <li>btw: NL249711382B01</li>
          <li>bank: NL26 ABNA 0247 9036 71</li>
        </ul>
      </vk-card>
  </vk-grid>
</div>
</template>

<script>
export default {
  data: () => ({
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
    billableTasks: [{
      description: '',
      units: 2,
      costPerUnit: 35,
    }]
  })
}
</script>
