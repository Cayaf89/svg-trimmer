<script setup>
import { useFilesStore } from '@/stores/files'
import { watch, ref } from "vue";

const store = useFilesStore()

const files = ref([]);

watch(store.trimmedFiles, (newValue) => {
    files.value = [];
    newValue.forEach((value) => {
        files.value.push({
            name: (Math.random() + 1).toString(36).substring(7) + '.svg',
            blobUrl : window.URL.createObjectURL(value)
        })
    })
})
</script>

<template>
    <div>
        <h1 class="green">Download your SVG file here</h1>
        <div class="download-zone">
            <div v-if="files.length > 0" v-for="file in files" class="file-item">
                <img class="file-image" :src="file.blobUrl" :alt="file.name">
                <a class="file-link" :href="file.blobUrl" :download="file.name">
                    Download SVG trimmed
                </a>
            </div>
            <div v-else class="empty-files">
                Upload files to get then trimmed here
            </div>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
    text-align: center;
}
.download-zone {
    background-color: #f1f0ef;
    color: #4f4f4f;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    height: auto;
    border-radius: 8px;
    padding-top: 1rem;
    padding-bottom: 1rem;
}
.empty-files {
    height: calc(76px - 2rem);
    line-height: calc(76px - 2rem);
    text-align: center;
}
.file-item {
    display: flex;
    align-items: center;
    width: 100%;
    padding-left: 3rem;

}
.file-image {
    height: 70px;
    width: auto;
    margin-right: 2rem;
}
.file-link {
    border-radius: 99999px;
    padding: .5rem 1rem;
}
</style>
