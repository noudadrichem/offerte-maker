<template>

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
