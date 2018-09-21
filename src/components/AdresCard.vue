<template>
  <vk-card class="uk-width-1-2@m">
    <vk-card-title>noudadrichem</vk-card-title>
  </vk-card>
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
