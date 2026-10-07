type MockSource = { dataType: unknown; value: unknown };

declare global {
  interface Window {
    __COPY_CLIPBOARD_E2E_SOURCE__?: MockSource | null;
    __COPY_CLIPBOARD_E2E_READY__?: boolean;
  }
}

export const EComponentKind = { BASIC: 'basic' };
export const ESetting = { SELECT: 'select', COLOR_PICKER: 'color-picker' };
export const BASIC_SETTINGS: unknown[] = [];
export const DEFAULT_SETTINGS: unknown[] = [];

export const Settings = (..._settings: unknown[]) => [];
export const load = (_settings: unknown[]) => ({ filter: (_key: string) => [] });

export const useRenderer = () => ({ connect: () => undefined });

export const useSources = () => {
  const source = window.__COPY_CLIPBOARD_E2E_SOURCE__;

  if (source?.dataType !== 'string') {
    window.__COPY_CLIPBOARD_E2E_READY__ = true;
  }

  return {
    sources: {
      datasource: source
        ? {
          dataType: source.dataType,
          getValue: async () => {
            window.setTimeout(() => {
              window.__COPY_CLIPBOARD_E2E_READY__ = true;
            }, 0);
            return source.value;
          },
          addListener: () => undefined,
          removeListener: () => undefined,
        }
        : undefined,
    },
  };
};
