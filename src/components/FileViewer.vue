<template>
  <div class="file-viewer p-4">
    <div v-if="selectedFile">
      <div v-if="selectedFile.type === 'pdf'" class="flex justify-center">
        <embed :src="getFilePath(selectedFile)" type="application/pdf" width="100%" height="600px" />
      </div>
      <div v-else-if="selectedFile.type === 'md'" class="relative">
        <div class="absolute top-0 right-0">
          <button @click="toggleView" class="bg-blue-500 text-white px-2 py-1 rounded">
            {{ isPlaintext ? 'Formatted' : 'Plaintext' }}
          </button>
        </div>
        <div v-if="isPlaintext" class="mt-8">
          <pre class="whitespace-pre-wrap overflow-x-auto">
            <code>{{ mdContent }}</code>
          </pre>
        </div>
        <div v-else class="mt-8" v-html="formattedMdContent"></div>
      </div>
    </div>
    <div v-else class="text-center text-gray-500">
      Please select a file to view its contents.
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import { useStore } from 'vuex';
import { marked } from 'marked'; // Updated import

export default {
  name: 'FileViewer',
  setup() {
    const store = useStore();
    const isPlaintext = ref(true);
    const mdContent = ref('');

    const selectedFile = computed(() => store.state.selectedFile);

    const formattedMdContent = computed(() => {
      return marked(mdContent.value);
    });

    const toggleView = () => {
      isPlaintext.value = !isPlaintext.value;
    };

    const getFilePath = (file) => {
      return `../assets/files/${file.name}`;
    };

    // Simulating file content loading
    const loadFileContent = async (file) => {
      if (file.type === 'md') {
        const response = await fetch(getFilePath(file));
        mdContent.value = await response.text();
      }
    };

    watch(selectedFile, (newFile) => {
      if (newFile && newFile.type === 'md') {
        loadFileContent(newFile);
      }
    });

    return {
      selectedFile,
      isPlaintext,
      mdContent,
      formattedMdContent,
      toggleView,
      getFilePath,
    };
  },
};
</script>
