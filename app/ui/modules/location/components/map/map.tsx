"use client";

import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM, { createPortal } from "react-dom";

import { LocationData } from "@/api/location/types";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useWindowSize } from "@/hooks/useWindowSize";
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

export const Map = ({
  locations,
  onLoading,
}: {
  locations: LocationData[];
  onLoading: () => void;
}) => {
  const [components, setComponents] = useState<{
    YMap: React.ComponentType<YMapComponentProps>;
    YMapDefaultSchemeLayer: React.ComponentType<YMapDefaultSchemeLayerProps>;
    YMapDefaultFeaturesLayer: React.ComponentType<object>;
    YMapMarker: React.ComponentType<YMapMarkerProps>;
    reactify: ReactifyInstance;
  } | null>(null);

  const [error, setError] = useState<string | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const mainMarkerRef = useRef<HTMLDivElement>(null);
  const [activeMarkerId, setActiveMarkerId] = useState<number | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();

  useEffect(() => {
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

        setComponents({
          YMap,
          YMapDefaultSchemeLayer,
          YMapDefaultFeaturesLayer,
          YMapMarker,
          reactify,
        });

        setTimeout(() => onLoading(), 2000);
      } catch (err) {
        console.error("Error:", err);
        setError("Ошибка загрузки карты");
        onLoading();
      }
    };

    loadMap();
  }, []);

  let defaultCoords = [-8.816273, 115.092538] as [number, number];

  if (width >= 768 && width <= 1279) {
    defaultCoords = [-8.815273, 115.090538];
  } else if (width <= 767) {
    defaultCoords = [-8.816273, 115.089538];
  }

  const startLocation = {
    center: toYandexCoordinates(defaultCoords),
    zoom: 16,
  };

  const handleCloseLocationCard = () => {
    setActiveMarkerId(null);
  };

  const handleMainMarkerClick = () => {
    setShowTooltip((prev) => !prev);
  };

  useClickOutside(mainMarkerRef, () => setShowTooltip(false));

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
              <div
                className={clsx(styles.markerWrapper, {
                  [styles.isShowTooltip]: showTooltip,
                })}
                onClick={handleMainMarkerClick}
                ref={mainMarkerRef}
              >
                <div className={styles.tooltip}>
                  <img src="/images/surfside-tooltip.svg" alt="" />
                  <div className={styles.tooltipFoot} />
                </div>
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
