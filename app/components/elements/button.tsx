import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

const button = cva(['rounded-[10px]', 'border'], {
  variants: {
    intent: {
      primary: ['bg-black', 'text-white', 'hover:bg-blue-600'],
      secondary: ['bg-white', 'text-gray-800', 'border-gray-400', 'hover:bg-gray-100'],
    },
    size: {
      large: ['h-[52px]', 'text-base', 'px-5', 'py-4'],
      medium: ['text-sm', 'py-2', 'px-3'],
      small: ['text-sm', 'py-1', 'py-2'],
    },
    disabled: {
      true: ['cursor-not-allowed', 'bg-gray-200', 'text-gray-500', 'hover:bg-gray-200'],
    },
  },

  defaultVariants: {
    intent: 'primary',
    size: 'medium',
    disabled: false,
  },
});

export interface ButtonVariantProps extends VariantProps<typeof button> {
  children: React.ReactNode;
}

export default function Button({ intent, size, disabled, children }: ButtonVariantProps) {
  return (
    <button className={button({ intent, size, disabled })} disabled>
      {children}
    </button>
  );
}
