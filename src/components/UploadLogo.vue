<template>
<div>
  <input type='file' ref="logoUpload" @change="loadTextFromFile"/>
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
        console.log('dit is reader: ', reader)
        console.log('dit is reader.result: ', reader.result)
        this.$set(this, 'imageData', reader.result)
      }
    }
  }
}
</script>
