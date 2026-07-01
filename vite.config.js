import { defineConfig } from 'vite'

// Relative base ('./') so the build works on GitHub Pages *project* sites
// (https://user.github.io/repo/) without hardcoding the repository name,
// and also on a custom domain or user/org page. No config change needed.
export default defineConfig({
  base: './',
  server: {
    // Honor the PORT env var so external dev-server managers can assign a port.
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
    host: true
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
    target: 'es2018'
  }
})
