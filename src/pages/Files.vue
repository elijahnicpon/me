<template>
  <div class="flex flex-row">
    <div class="border border-vscode-dark-border w-80">
      <FileBrowser />
    </div>
    <div>
      <FileViewer />
    </div>
  </div>
</template>

<script>
import FileBrowser from '../components/FileBrowser.vue';
import FileViewer from '../components/FileViewer.vue';

export default {
  name: 'Files'
}
</script>