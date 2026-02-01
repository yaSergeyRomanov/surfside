export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  Tag: "section" | "div";
  id?: string;
  isHasNotOffsets?: boolean;
  isHigh?: boolean;
}
