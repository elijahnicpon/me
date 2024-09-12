<template>
    <div class="w-full md:w-3/4 h-full p-4 relative">
        <div v-if="selectedFile">
            <div v-if="isMarkdownFile(selectedFile)" class="flex justify-end">
                <button @click="toggleMarkdownView">
                    {{ markdownView === 'plaintext' ? 'Show Formatted' : 'Show Plaintext' }}
                </button>
            </div>
            <div v-if="isPdfFile(selectedFile)" class="flex justify-center">
                <iframe :src="selectedFile.url" class="h-full w-full" />
            </div>
            <div v-if="isMarkdownFile(selectedFile)">
                <div v-if="markdownView === 'plaintext'" class="whitespace-pre-wrap overflow-auto h-full">
                    <pre>{{ markdownContent }}</pre>
                </div>
                <div v-else class="prose">
                    <div v-html="formattedMarkdown"></div>
                </div>
            </div>
        </div>
        <div v-else class="flex items-center justify-center h-full">
            <p>Please select a file to view.</p>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import marked from 'marked';

export default {
    setup() {
        const selectedFile = ref(null);
        const markdownView = ref('plaintext');
        const markdownContent = ref('');
        const formattedMarkdown = ref('');

        const toggleMarkdownView = () => {
            markdownView.value = markdownView.value === 'plaintext' ? 'formatted' : 'plaintext';
        };

        const isPdfFile = (file) => file.extension === 'pdf';
        const isMarkdownFile = (file) => file.extension === 'md';

        const loadMarkdownFile = async (file) => {
            const response = await fetch(file.url);
            const text = await response.text();
            markdownContent.value = text;
            formattedMarkdown.value = marked(text);
        };

        return {
            selectedFile,
            markdownView,
            markdownContent,
            formattedMarkdown,
            toggleMarkdownView,
            isPdfFile,
            isMarkdownFile,
            loadMarkdownFile,
        };
    },
};
</script>