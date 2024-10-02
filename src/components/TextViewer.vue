## OLD IN PROGRESS MARKDOWN VIEWER THAT IS BASICALLY JUST A TEXT VIEWER ATM BUT WITH WORKING IMAGES... USE LATER?

<template>
    <div class="flex flex-col h-full bg-gray-800 text-gray-300 overflow-y-auto rounded">

      <div class="markdown-viewer">
        <div v-html="renderedMarkdown"></div>
      </div>
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
  computed: {
    path() {
      return new URL(`../assets/files/${this.filepath}`, import.meta.url).href;
    }
  },
  setup(props) {
    const renderedMarkdown = ref('');

    const fetchAndRenderMarkdown = async () => {
      try {
        // Ensure the filepath is correctly formatted for fetching
        const path = new URL(`../assets/files/${props.filepath}`, import.meta.url).href;
        console.log(path);
        const response = await fetch(path);
        const markdown = await response.text();

        // Update image paths to reference the assets folder
        const updatedMarkdown = markdown.replace(/!\[.*?\]\((.*?)\)/g, (match, p1) => {
          const imagePath = new URL(`../assets/${p1}`, import.meta.url).href;
          return `![Image](${imagePath})`;
        });

        renderedMarkdown.value = marked(updatedMarkdown);
        console.log(renderedMarkdown.value);
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
  flex: 1; /* Allow the viewer to grow and fill available space */
  margin: 0; /* Remove margin to utilize full space */
  padding: 20px;
  background-color: #1e1e1e; /* Dark background for code editor look */
  color: #dcdcdc; /* Light text color */
  overflow-y: auto; /* Enable vertical scrolling */
  border-radius: 5px; /* Optional: rounded corners */
  font-family: 'Courier New', Courier, monospace; /* Monospace font for code editor feel */
  display: flex; /* Use flexbox for alignment */
  flex-direction: column; /* Stack children vertically */
  justify-content: flex-start; /* Align content to the top */
  text-align: left; /* Align text to the left */
  white-space: pre-wrap; /* Preserve whitespace and wrap text */
}

</style>
