/// <reference types="vite/client" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
    }
  }
}
