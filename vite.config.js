import { resolve } from "path";
import { defineConfig } from "vite";
// Slightly modified from https://github.com/alexlafroscia/vite-plugin-handlebars
import handlebars from "@glitchdotcom/vite-plugin-handlebars";
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    return{
      plugins: [
        mkcert(),
        handlebars({
          partialDirectory: resolve(__dirname, './layout'),
          settingsFile: 'settings.json',
          helpers: {
            hostasclass: value => new URL(value).hostname.replace(/\./g, "_")
          },
          reloadOnPartialChange: true
        }),
      ],
      
      root: '.',

      server: {
        https: true,
        // host: true,
        // port:3000,
        // strictPort: true,
        // hmr: {
        //   clientPort: 443
        // }
      },

      optimizeDeps:{
        exclude: ['./settings.json']
      },
      build: {
        cssCodeSplit: false,
        outDir: "build",
        rollupOptions: {
          input: {
            main: resolve(__dirname, "index.html"),
            grand: resolve(__dirname, "grandHeresy/index.html"),
            free: resolve(__dirname, "freewayRun/index.html"),
            wall: resolve(__dirname, "wallStreetFighter/index.html"),
            doors: resolve(__dirname, "closedDoors/index.html"),
          }
        }
      },
    }
})



