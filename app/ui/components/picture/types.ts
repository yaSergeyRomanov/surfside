interface Image {
  x1: string;
  x2?: string;
  tablet?: string;
  mobile?: string;
  alt?: string;
}

export interface PictureProps {
  className?: string;
  style?: React.CSSProperties;
  image: Image;
  width?: number;
  height?: number;
}
