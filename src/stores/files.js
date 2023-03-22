import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useFilesStore = defineStore('files', {
    // arrow function recommended for full type inference
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            files: [],
            trimmedFiles: []
        }
    },
    actions: {
        // since we rely on `this`, we cannot use an arrow function
        addFile(file) {
            this.files.push(file)
        },
        removeFile(index) {
            this.files.splice(index, 1);
        },
        // since we rely on `this`, we cannot use an arrow function
        addTrimmedFile(file) {
            this.trimmedFiles.push(file)
        },
        removeTrimmedFile(index) {
            this.trimmedFiles.splice(index, 1);
        }
    }
})
