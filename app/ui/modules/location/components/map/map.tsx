"use client";

import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM, { createPortal } from "react-dom";

import { useClickOutside } from "@/hooks/useClickOutside";
import { Section } from "@/ui/components/section";

import { LocationCard } from "../location-card";

import { MOCK_LOCATION_DATA } from "./mock";
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

const START_LOCATION = {
  center: toYandexCoordinates([-8.818273, 115.089538]) as [number, number],
  zoom: 14,
};

export const Map = () => {
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

  useEffect(() => {
    let mounted = true;

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

        if (mounted) {
          setComponents({
            YMap,
            YMapDefaultSchemeLayer,
            YMapDefaultFeaturesLayer,
            YMapMarker,
            reactify,
          });
          setLoading(false);
        }
      } catch (err) {
        console.error("Error:", err);
        if (mounted) {
          setError("Ошибка загрузки карты");
          setLoading(false);
        }
      }
    };

    loadMap();

    return () => {
      mounted = false;
    };
  }, []);

  const handleCloseLocationCard = () => {
    setActiveMarkerId(null);
  };

  useClickOutside(cardRef, handleCloseLocationCard);

  const handleMarkerClick = (id: number) => {
    setActiveMarkerId((prevId) => {
      if (prevId === id) {
        return null;
      }
      return id;
    });
  };

  if (loading) {
    return (
      <Section className={styles.wrapper} Tag="section">
        <div
          style={{
            width: "600px",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Загрузка карты...
        </div>
      </Section>
    );
  }

  if (error) {
    return (
      <Section className={styles.wrapper} Tag="section">
        <div
          style={{
            width: "600px",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "red",
          }}
        >
          {error}
        </div>
      </Section>
    );
  }

  if (!components) return null;

  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
    YMapMarker,
    reactify,
  } = components;

  return (
    <Section className={styles.wrapper} Tag="section">
      <div className={styles.map}>
        <YMap location={reactify.useDefault(START_LOCATION)} mode="vector">
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

          {MOCK_LOCATION_DATA.map((item, index) => (
            <YMapMarker
              coordinates={reactify.useDefault(
                toYandexCoordinates(item.coords as [number, number]),
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
                      imageUrl={item.card.imageUrl}
                      title={item.card.title}
                      route={item.card.route}
                      routeIcon={item.card.routeIcon}
                      description={item.card.description}
                    />,
                    document.body,
                  )}
              </div>
            </YMapMarker>
          ))}
        </YMap>
      </div>
    </Section>
  );
};
