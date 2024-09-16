<!-- <template>
    <div class="w-full md:w-1/4 border-r border-gray-300 h-full">
        <div class="accordion">
            <Folder v-for="folder in folders" :key="folder.id" :folder="folder"
                :expanded="expandedFolders.includes(folder.id)" @toggle="toggleFolder(folder.id)"
                @select-file="selectFile" />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import Folder from './Folder.vue';
// import { files } from '../assets/files';

export default {
    setup() {
        const folders = ref([
            // Your folder and file structure here
        ]);

        const expandedFolders = ref([]);
        const selectedFile = ref(null);

        const toggleFolder = (folderId) => {
            if (expandedFolders.value.includes(folderId)) {
                expandedFolders.value = expandedFolders.value.filter(id => id !== folderId);
            } else {
                expandedFolders.value.push(folderId);
            }
        };

        const selectFile = (file) => {
            selectedFile.value = file;
        };

        return {
            folders,
            expandedFolders,
            selectedFile,
            toggleFolder,
            selectFile,
        };
    },
};
</script> -->