export interface ChartSectionProps {
  title: string;
  subtitle: string;
  chart: ChartProps[];
}

export interface ChartProps {
  title: string;
  time: string;
  percent: string;
}
