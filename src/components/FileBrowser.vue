<template>
  <div class="font-mono text-sm text-left">
    <ul class="list-none p-0 m-0">
      <li v-for="(item, index) in fileStructure" :key="index">
        <FileItem :item="item" :depth="0" />
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
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
  setup(props) {
    // You can add any additional logic here if needed
    return {};
  },
});
</script>
