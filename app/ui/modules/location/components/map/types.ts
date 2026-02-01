export interface YMapLocation {
  center: [number, number];
  zoom: number;
}

export interface YMapComponentProps {
  location: YMapLocation;
  mode?: string;
  children?: React.ReactNode;
}

export interface YMapDefaultSchemeLayerProps {
  theme?: "light" | "dark";
}

export interface YMapMarkerProps {
  coordinates: [number, number];
  draggable?: boolean;
  children?: React.ReactNode;
}

export interface ReactifyInstance {
  useDefault: <T>(value: T) => T;
  module: (ymaps: unknown) => {
    YMap: React.ComponentType<YMapComponentProps>;
    YMapDefaultSchemeLayer: React.ComponentType<object>;
    YMapDefaultFeaturesLayer: React.ComponentType<object>;
    YMapMarker: React.ComponentType<YMapMarkerProps>;
  };
}

export interface YMaps3ReactifyModule {
  reactify: {
    bindTo: (
      React: typeof import("react"),
      ReactDOM: typeof import("react-dom"),
    ) => ReactifyInstance;
  };
}
