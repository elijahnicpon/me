<template>
  <iframe
    :src="pdfPath"
    width="100%"
    height="100%"
    style="border: none;"
  ></iframe>
</template>

<script>
export default {
  name: 'PDFViewer',
  props: {
    filepath: {
      type: String,
      default: 'elijah_nicpon_resume_2024.pdf'
    }
  },
  computed: {
    pdfPath() {
      return new URL(`../assets/files/${this.filepath}`, import.meta.url).href;
    }
  }
}
</script>

<style scoped>
iframe {
  min-height: 600px; /* Adjust this value as needed */
}
</style>
