"use client";

import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM, { createPortal } from "react-dom";

import { LocationData } from "@/api/location/types";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Preloader } from "@/ui/components/preloader";
import { Section } from "@/ui/components/section";

import { LocationCard } from "../location-card";

import {
  ReactifyInstance,
  YMapComponentProps,
  YMapDefaultSchemeLayerProps,
  YMapMarkerProps,
  YMaps3ReactifyModule,
} from "./types";

import styles from "./map.module.scss";

const YA_API_URL =
  "https://api-maps.yandex.ru/v3/?apikey=89c6feb0-19e4-4628-afa4-ecf751cb6e50&lang=en_EN";

const toYandexCoordinates = (latLng: [number, number]): [number, number] => {
  return [latLng[1], latLng[0]];
};

export const Map = ({ locations }: { locations: LocationData[] }) => {
  const [components, setComponents] = useState<{
    YMap: React.ComponentType<YMapComponentProps>;
    YMapDefaultSchemeLayer: React.ComponentType<YMapDefaultSchemeLayerProps>;
    YMapDefaultFeaturesLayer: React.ComponentType<object>;
    YMapMarker: React.ComponentType<YMapMarkerProps>;
    reactify: ReactifyInstance;
  } | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [activeMarkerId, setActiveMarkerId] = useState<number | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [isMounted, setIsMounted] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    setIsMounted(true);

    const loadMap = async () => {
      try {
        if (!window.ymaps3) {
          await new Promise<void>((resolve, reject) => {
            const script = document.createElement("script");
            script.src = YA_API_URL;
            script.async = true;

            script.onload = () => resolve();
            script.onerror = () =>
              reject(new Error("Failed to load Yandex Maps"));

            document.head.appendChild(script);
          });
        }

        await window.ymaps3.ready;

        const [ymaps3Reactify] = await Promise.all([
          window.ymaps3.import(
            "@yandex/ymaps3-reactify",
          ) as Promise<YMaps3ReactifyModule>,
          window.ymaps3.ready,
        ]);

        const reactify = ymaps3Reactify.reactify.bindTo(React, ReactDOM);

        const {
          YMap,
          YMapDefaultSchemeLayer,
          YMapDefaultFeaturesLayer,
          YMapMarker,
        } = reactify.module(window.ymaps3);

        if (isMounted) {
          setComponents({
            YMap,
            YMapDefaultSchemeLayer,
            YMapDefaultFeaturesLayer,
            YMapMarker,
            reactify,
          });

          setTimeout(() => setLoading(false), 2000);
        }
      } catch (err) {
        console.error("Error:", err);
        if (isMounted) {
          setError("Ошибка загрузки карты");
          setLoading(false);
        }
      }
    };

    loadMap();

    return () => {
      setIsMounted(false);
    };
  }, [isMounted]);

  let defaultCoords = [-8.816273, 115.092538] as [number, number];

  if (isMounted && width >= 768 && width <= 1279) {
    defaultCoords = [-8.815273, 115.090538];
  } else if (isMounted && width <= 767) {
    defaultCoords = [-8.816273, 115.089538];
  }

  const startLocation = {
    center: toYandexCoordinates(defaultCoords),
    zoom: 16,
  };

  const handleCloseLocationCard = () => {
    setActiveMarkerId(null);
  };

  const handleMarkerClick = (id: number) => {
    setActiveMarkerId((prevId) => {
      if (prevId === id) {
        return null;
      }
      return id;
    });
  };

  if (!components) return null;

  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
    YMapMarker,
    reactify,
  } = components;

  return (
    <>
      <Preloader isActive={!loading} theme={"blue"} />
      <Section className={styles.wrapper} Tag="section">
        <div className={styles.map}>
          <YMap location={reactify.useDefault(startLocation)} mode="vector">
            <YMapDefaultSchemeLayer theme="dark" />
            <YMapDefaultFeaturesLayer />
            <YMapMarker
              coordinates={reactify.useDefault(
                toYandexCoordinates([-8.818273, 115.089938]),
              )}
              draggable={false}
            >
              <div className={styles.markerWrapper}>
                <div className={styles.pin}>
                  <img src="/icons/surfside-pin.svg" alt="Surfside pin" />
                </div>
              </div>
            </YMapMarker>

            {locations.map((item) => {
              const cordsToArr = item.coords
                .split(",")
                .map((item) => +item) as [number, number];

              return (
                <YMapMarker
                  coordinates={reactify.useDefault(
                    toYandexCoordinates(cordsToArr),
                  )}
                  draggable={false}
                  key={item.id}
                >
                  <div
                    className={clsx(styles.markerWrapper, styles.isInteract, {
                      [styles.isActive]: activeMarkerId === item.id,
                    })}
                  >
                    <div
                      className={clsx(styles.pin)}
                      data-exclude-click-outside="true"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMarkerClick(item.id);
                      }}
                    >
                      <img src="/icons/map-pin.svg" alt="Map pin" />
                    </div>

                    {activeMarkerId === item.id &&
                      createPortal(
                        <LocationCard
                          ref={cardRef}
                          images={item.images}
                          title={item.title}
                          route={item.route}
                          routeIcon={item.routeIcon}
                          description={item.description}
                          onClickOutside={handleCloseLocationCard}
                        />,
                        document.body,
                      )}
                  </div>
                </YMapMarker>
              );
            })}
          </YMap>
        </div>
      </Section>
    </>
  );
};
