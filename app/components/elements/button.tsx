import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

const button = cva(['rounded-[100px]', 'border', 'rounded'], {
  variants: {
    intent: {
      primary: ['bg-black', 'text-white', 'hover:bg-blue-600'],
      secondary: ['bg-white', 'text-gray-800', 'border-gray-400', 'hover:bg-gray-100'],
    },
    size: {
      xlarge: ['h-[52px]', 'text-base', 'px-5', 'py-4'],
      small: ['text-sm', 'py-1', 'py-2'],
      medium: ['text-base', 'py-2', 'py-4'],
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
});

export interface ButtonVariantProps extends VariantProps<typeof button> {
  children: React.ReactNode;
}

export default function Button({ intent, size, children }: ButtonVariantProps) {
  return <button className={button({ intent, size })}>{children}</button>;
}
