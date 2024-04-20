/* eslint-disable no-underscore-dangle */
/// <reference types="vite/client" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SOME_VALUE: string;
    }
  }
}
export {};
/* declare const process: {
  env: {};
}; */
