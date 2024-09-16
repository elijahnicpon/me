<template>
  <div class="flex flex-row">
    <div class="border border-vscode-dark-border w-80">
      <FileBrowser :fileStructure="fileStructure" @fileSelected="handleFileSelection" />
    </div>
    <div class="flex-grow flex justify-center items-center">
      <PDFViewer v-if="selectedFile && selectedFile.endsWith('.pdf')" :filepath="selectedFile" />
      <MarkdownViewer v-else-if="selectedFile && selectedFile.endsWith('.md')" :filepath="selectedFile" />
      <p v-else>Select a file to view</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import FileBrowser from '../components/FileBrowser.vue';
import PDFViewer from '../components/PDFViewer.vue';
import MarkdownViewer from '../components/MarkdownViewer.vue';
import fileStructureData from '../assets/file-structure.json';

export default {
  name: 'Files',
  components: {
    FileBrowser,
    PDFViewer,
    MarkdownViewer
  },
  setup() {
    const fileStructure = ref(fileStructureData);
    const selectedFile = ref(null);

    const handleFileSelection = (filepath) => {
      console.log('Selected file:', filepath);
      selectedFile.value = filepath;
    };

    return {
      fileStructure,
      selectedFile,
      handleFileSelection
    };
  }
}
</script>