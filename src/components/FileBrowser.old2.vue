<template>
  <div class="file-browser">
    <div v-for="(item, index) in sortedFiles" :key="index">
      <div
        @click="toggleFolder(item)"
        class="cursor-pointer p-2 hover:bg-gray-100"
        :class="{ 'font-bold': item.type === 'folder' }"
      >
        {{ item.name }}
      </div>
      <div v-if="item.type === 'folder' && item.expanded" class="pl-4">
        <div
          v-for="(file, fileIndex) in item.files"
          :key="fileIndex"
          @click="selectFile(file)"
          class="cursor-pointer p-2 hover:bg-gray-100"
          :class="{ 'bg-blue-100': selectedFile === file }"
        >
          {{ file.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'FileBrowser',
  setup() {
    const store = useStore();
    const files = ref([
      {
        name: 'Education',
        type: 'folder',
        expanded: false,
        order: 1,
        files: [
          { name: 'File1.pdf', type: 'pdf', order: 1 },
          { name: 'File2.md', type: 'md', order: 2 },
        ],
      },
      {
        name: 'Folder 2',
        type: 'folder',
        expanded: false,
        order: 2,
        files: [
          { name: 'File3.pdf', type: 'pdf', order: 1 },
          { name: 'File4.md', type: 'md', order: 2 },
        ],
      },
    ]);

    const sortedFiles = computed(() => {
      return [...files.value].sort((a, b) => a.order - b.order);
    });

    const toggleFolder = (folder) => {
      folder.expanded = !folder.expanded;
    };

    const selectFile = (file) => {
      store.commit('setSelectedFile', file);
    };

    return {
      sortedFiles,
      toggleFolder,
      selectFile,
      selectedFile: computed(() => store.state.selectedFile),
    };
  },
};
</script>
