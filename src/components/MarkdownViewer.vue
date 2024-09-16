<template>
  <div class="markdown-viewer">
    <div v-html="renderedMarkdown"></div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { marked } from 'marked';

export default {
  name: 'MarkdownViewer',
  props: {
    filepath: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const renderedMarkdown = ref('');

    const fetchAndRenderMarkdown = async () => {
      try {
        const response = await fetch(props.filepath);
        const markdown = await response.text();
        renderedMarkdown.value = marked(markdown);
      } catch (error) {
        console.error('Error fetching or rendering markdown:', error);
        renderedMarkdown.value = 'Error loading markdown content';
      }
    };

    onMounted(fetchAndRenderMarkdown);
    watch(() => props.filepath, fetchAndRenderMarkdown);

    return {
      renderedMarkdown
    };
  }
}
</script>

<style scoped>
.markdown-viewer {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
