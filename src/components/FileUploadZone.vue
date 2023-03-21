<script setup>
// Import FilePond
import vueFilePond from 'vue-filepond';

// Import plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js';

// Import styles
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

// Create FilePond component
const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview);

import { ref, watch } from 'vue'

let files = ref([]);

watch(files, (newFiles) => {
    console.log(newFiles)
})
</script>

<template>
    <div>
        <h1 class="green">Upload your SVG file here</h1>
        <file-pond
            :files="files"
            allow-multiple="true"
            accepted-file-types="image/svg+xml"
        />
    </div>
</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
    text-align: center;
}
</style>
