import type { PictureProps } from "./types";

import clsx from "clsx";

import styles from "./picture.module.scss";

export const Picture = ({
  image,
  className,
  style,
  width,
  height,
}: PictureProps) => (
  <picture className={clsx(styles.picture, className)} style={style}>
    {image?.mobile && (
      <source media="(max-width: 767px)" srcSet={image.mobile} />
    )}
    {image?.tablet && (
      <source media="(max-width: 1279px)" srcSet={image.tablet} />
    )}
    {image?.x2 && (
      <source
        media="(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)"
        srcSet={image.x2}
      />
    )}
    <img width={width} height={height} src={image?.x1} alt={image?.alt || ""} />
  </picture>
);
