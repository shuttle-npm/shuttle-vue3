import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.js"),
            name: "shuttle-vue3",
            fileName: (format) => `shuttle-vue3-${format}.js`
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue"
                },
                assetFileNames: (assetInfo) => {
                    return (assetInfo.name == 'style.css') ? 'shuttle-vue3.css' : assetInfo.name;
                },
            }
        }
    },
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
