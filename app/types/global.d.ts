declare global {
  interface Window {
    ymaps3: {
      ready: Promise<void>;
      import: (module: string) => Promise<unknown>;
    };
  }
}

export {};
