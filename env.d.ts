/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />

// 构建时由 vite.config.ts 的 define 注入
declare const __APP_VERSION__: string;
declare const __APP_COMMIT__: string;
declare const __APP_BUILD_TIME__: string;

interface ImportMetaEnv {
  readonly VITE_RPC_DEBUG_PANEL_ENABLED?: string;
}
