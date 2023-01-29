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
          partialDirectory: resolve(__dirname, './partials'),
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
            grand: resolve(__dirname, "games/grandHeresy/index.html"),
            free: resolve(__dirname, "games/freewayRun/index.html"),
            wall: resolve(__dirname, "games/wallStreetFighter/index.html"),
            doors: resolve(__dirname, "games/closedDoors/index.html"),
            stick: resolve(__dirname, "games/parkouringStickman/index.html"),
            tron: resolve(__dirname, "games/tronPatrol/index.html"),
            //js: resolve(__dirname, "main.js"),
          }
        }
      },
    }
})



