import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Apple-like easing curve used across all animations
export const APPLE_EASE = [0.25, 0.4, 0.25, 1] as [number, number, number, number];
