import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

const button = cva(['cursor-pointer', 'font-gothic'], {
  variants: {
    intent: {
      cta: ['bg-primary-200', 'text-gray-800', 'hover:bg-primary-500'],
      primary: ['bg-tertiary-500', 'text-white', 'hover:bg-tertiary-600'],
      secondary: ['text-gray-800', 'hover:bg-tertiary-300'],
    },
    size: {
      large: ['h-[52px]', 'text-base', 'px-5', 'py-4'],
      medium: ['text-sm', 'py-2', 'px-3'],
      small: ['text-xs', 'py-1', 'px-2'],
    },
    disabled: {
      true: ['cursor-not-allowed', 'bg-gray-200', 'text-gray-500', 'hover:bg-gray-200'],
    },
  },

  defaultVariants: {
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
