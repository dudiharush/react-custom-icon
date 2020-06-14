import React from "react";

type CustomIconProps<K> = {
  type: K;
  size?: number;
  color?: string;
  stroke?: string;
  className?: string;
};

type IconData = {
  content: JSX.Element;
  viewBoxSize: number;
};

export type IconMap = Record<string, IconData>;

export function getCustomIcon<T extends IconMap>(map: T) {
  const CustomIcon = ({
    className,
    type,
    size,
    color,
    stroke,
    ...others
  }: CustomIconProps<keyof T>) => {
    const { viewBoxSize, content } = map[type];
    return (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        fill={color}
        height={size}
        width={size}
        stroke={stroke}
        {...others}
      >
        {content}
      </svg>
    );
  };

  return CustomIcon;
}

export function createIconMap<T extends IconMap>(iconMap: T) {
  return iconMap;
}
