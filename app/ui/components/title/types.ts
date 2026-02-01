export interface TitleProps {
  Tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  text: string;
  className?: string;
  size?: "XXL" | "XL" | "L" | "S";
}
