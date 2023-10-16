import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

const display = cva([], {
  variants: {
    size: {
      large: ['text-3xl'],
      medium: ['text-2xl'],
      small: ['text-xl'],
    },
    weight: {
      bold: ['font-bold'],
      regular: ['font-regular'],
    },
  },

  defaultVariants: {
    size: 'medium',
    weight: 'regular',
  },
});

export interface DisplayVariantProps extends VariantProps<typeof display> {
  children: React.ReactNode;
}
// px-2 py-3
// TODO 태그 지정 가능하도록 하기
const Display = ({ size, weight, children }: DisplayVariantProps) => {
  return <div className={`${display({ size, weight })} font-batang `}>{children}</div>;
};

export default Display;
