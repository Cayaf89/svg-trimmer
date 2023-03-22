<script setup>
// Import FilePond
import vueFilePond from 'vue-filepond';
import { useFilesStore } from '@/stores/files'

// Import plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

// Import styles
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

// Create FilePond component
const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview);


// access the `store` variable anywhere in the component ✨
const store = useFilesStore()
let reader = new FileReader()
document.addEventListener('FilePond:addfile', (e) => {
    store.addFile(e.detail.file)
    reader.onload = handleFileLoad;
    reader.readAsText(e.detail.file.file)

    function handleFileLoad(event) {
        let svg = createElementFromHTML(event.target.result);
        document.body.appendChild(svg);
        let bbox = svg.getBBox()
        console.log(svg, bbox)
        let viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");
        svg.setAttribute("viewBox", viewBox);
        let blob = new Blob([svg.outerHTML], {type: 'image/svg+xml'});
        store.addTrimmedFile(blob)
        document.body.removeChild(svg)
    }

    function createElementFromHTML(htmlString) {
        let div = document.createElement('template');
        div.innerHTML = htmlString;

        return div.content.querySelector("svg");
    }
});
</script>

<template>
    <div>
        <h1 class="green">Upload your SVG file here</h1>
        <file-pond
            name="test"
            ref="pond"
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
