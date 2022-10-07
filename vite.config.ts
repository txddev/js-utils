import { defineConfig } from 'vite'


// https://vitejs.dev/config/
export default defineConfig({

    build: {    
        lib: {
          formats:["es"],
          entry: './src/libWrapper.ts',
        },
    }
})
