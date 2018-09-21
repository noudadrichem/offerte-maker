<template>
<div class="uk-container uk-container-small">
    <h1>noudadrichem</h1>

  <vk-grid class="uk-child-width-1-2@s uk-child-width-1-2@m ">
    <div>
      <vk-card>
        <ul>
          <li>noudadrichem</li>
          <li>Coryluslaan 18 1702VN Heerhugowaard</li>
          <li>kvk: 6898 2624</li>
          <li>btw: NL249711382B01</li>
          <li>bank: NL26 ABNA 0247 9036 71</li>
        </ul>
      </vk-card>
    </div>

    <div>
      <vk-card>
        <ul>
          <li>Offertenummer: 18001</li>
          <li>Offertedatum: 2018-09-11</li>
          <li>Offerte aan: Juliet manrho</li>
          <li>Opdrachtgever: bigfatkampnie</li>
        </ul>
      </vk-card>
    </div>
  </vk-grid>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  methods: {
    inc() {
      this.$store.commit('increment')
    }
  },
  computed: mapState({
    count: s => s.counter,
  })
}
</script>
