<template>
  <div class="flex flex-row">
    <div class="border border-vscode-dark-border w-80">
      <FileBrowser :fileStructure="fileStructure" />
    </div>
    <div class="flex-grow flex justify-center items-center">
      <PDFViewer :filepath="'elijah_nicpon_resume_2024.pdf'" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import FileBrowser from '../components/FileBrowser.vue';
import PDFViewer from '../components/PDFViewer.vue';
import fileStructureData from '../assets/file-structure.json';

export default {
  name: 'Files',
  components: {
    FileBrowser,
    PDFViewer
  },
  setup() {
    const fileStructure = ref(fileStructureData);
    console.log(fileStructure.value);
    return {
      fileStructure
    };
  }
}
</script>