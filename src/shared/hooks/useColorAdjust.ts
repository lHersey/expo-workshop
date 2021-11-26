import { useMemo } from 'react';

const useColorAdjust = (color: string, modifier: number) => {
  return useMemo(
    () =>
      '#' +
      color
        .replace(/^#/, '')
        .replace(/../g, c => ('0' + Math.min(255, Math.max(0, parseInt(c, 16) + modifier)).toString(16)).substr(-2)),
    [color, modifier],
  );
};

export const colorAdjust = (color: string, modifier: number) =>
  '#' +
  color
    .replace(/^#/, '')
    .replace(/../g, c => ('0' + Math.min(255, Math.max(0, parseInt(c, 16) + modifier)).toString(16)).substr(-2));

export { useColorAdjust };
