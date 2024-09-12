<template>
    <div>
        <div @click="toggle" class="cursor-pointer p-2 flex justify-between items-center">
            {{ folder.name }}
            <span>{{ expanded ? '-' : '+' }}</span>
        </div>
        <div v-if="expanded" class="pl-4">
            <div v-for="subfolder in folder.subfolders" :key="subfolder.id">
                <Folder :folder="subfolder" :expanded="expandedFolders.includes(subfolder.id)"
                    @toggle="toggleFolder(subfolder.id)" @select-file="selectFile" />
            </div>
            <div v-for="file in folder.files" :key="file.id" @click="selectFile(file)" class="cursor-pointer">
                {{ file.name }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['folder', 'expanded'],
    methods: {
        toggle() {
            this.$emit('toggle');
        },
        selectFile(file) {
            this.$emit('select-file', file);
        }
    }
};
</script>