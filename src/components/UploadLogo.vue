<template>
<div class="upload-logo">
  <input type='file' ref="logoUpload" class="delete" @change="loadTextFromFile"/>
  <img :src="imageData"/>
</div>
</template>

<script>
export default {
  data: () => ({
    imageData: ''
  }),
  methods: {
    loadTextFromFile(e) {
      console.log('new file ')
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onload = () => {
        this.$set(this, 'imageData', reader.result)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.upload-logo {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  img {
    max-width: 400px;
  }
}
</style>
