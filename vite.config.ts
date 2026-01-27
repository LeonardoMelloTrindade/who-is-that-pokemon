/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command: _command, mode: _mode }) => {
  // Use /who-is-that-pokemon for GitHub Pages, / for Vercel and other deployments
  const base = process.env.GITHUB_ACTIONS ? "/who-is-that-pokemon" : "/"

  return {
    plugins: [react()],
    base
  }
})