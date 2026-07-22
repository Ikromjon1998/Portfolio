import { defineConfig } from 'vitest/config';
import type { Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { buildLlmsTxt, buildResumeJson } from './scripts/agentFiles';

function agentFiles(): Plugin {
  return {
    name: 'agent-files',
    apply: 'build',
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'llms.txt', source: buildLlmsTxt() });
      this.emitFile({ type: 'asset', fileName: 'resume.json', source: buildResumeJson() });
    },
  };
}

export default defineConfig({
  plugins: [react(), agentFiles()],
  build: {
    // Covers the lazily-loaded @react-pdf/renderer chunk (~1.4 MB); the main bundle stays small.
    chunkSizeWarningLimit: 1500,
  },
  test: {
    include: ['src/**/*.test.{ts,tsx}'],
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: false,
  },
});
