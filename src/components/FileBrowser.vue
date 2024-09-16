<template>
  <div class="file-browser">
    <ul class="list-none px-4 py-2 m-0 text-left">
      <li v-for="(item, index) in fileStructure" :key="index">
        <FileItem 
          :item="item" 
          :depth="0" 
          :openFolders="openFolders"
          @fileSelected="handleFileSelected" 
          @toggleFolder="handleToggleFolder"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import FileItem from './FileItem.vue';

export default defineComponent({
  name: 'FileBrowser',
  components: {
    FileItem,
  },
  props: {
    fileStructure: {
      type: Array,
      required: true,
    },
  },
  emits: ['fileSelected'],
  setup(props, { emit }) {
    const openFolders = ref(new Set());

    const handleFileSelected = (file) => {
      // Emit the selected file to the parent component (Files.vue)
      emit('fileSelected', file);
    };

    const handleToggleFolder = (folderPath) => {
      if (openFolders.value.has(folderPath)) {
        openFolders.value.delete(folderPath);
      } else {
        openFolders.value.add(folderPath);
      }
    };

    return {
      handleFileSelected,
      handleToggleFolder,
      openFolders,
    };
  },
});
</script>
