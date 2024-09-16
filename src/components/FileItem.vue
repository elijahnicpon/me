<template>
  <div :style="{ paddingLeft: `${depth * 20}px` }">
    <span v-if="item.type === 'folder'" @click="toggleFolder">
      {{ isOpen ? '▼' : '▶' }} {{ item.name }}
    </span>
    <span v-else @click="selectFile(item.path)">{{ item.name }}</span>
    <ul v-if="item.type === 'folder' && isOpen">
      <li v-for="(child, index) in item.children" :key="index">
        <FileItem :item="child" :depth="depth + 1" @fileSelected="selectFile" />
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'FileItem',
  props: {
    item: Object,
    depth: Number,
  },
  setup(props, { emit }) {
    const isOpen = ref(false);

    const toggleFolder = () => {
      isOpen.value = !isOpen.value;
    };

    const selectFile = (filepath) => {
      emit('fileSelected', filepath);
    };

    return {
      isOpen,
      toggleFolder,
      selectFile,
    };
  },
}
</script>
