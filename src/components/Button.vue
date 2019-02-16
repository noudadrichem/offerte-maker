<template>
  <button :class="['btn', 'cta', className]">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: ['className']
}
</script>

<style lang="scss" scoped>
.btn.cta {
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  background-color: var(--blanko-blue);
  padding: 8px 16px;
  letter-spacing: .5px;
  font-weight: 600;
  line-height: 12px;
  border-radius: 4px;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: all .25s cubic-bezier(.23,1,.32,1);

  &:hover {
    background-color: var(--blanko-blue-light);
  }

  &.flex {
    flex: 1;
  }
}

</style>

