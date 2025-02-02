import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges the given class names with the tailwind classes
 * @param inputs The class names to merge
 * @returns The merged class names
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Calculates the discount percentage
 * @param price The original price
 * @param salePrice The sale price
 * @returns The discount percentage
 */
export function getDiscountPercentage(
  price: string | number,
  salePrice: number
) {
  if (typeof price === "string" || price === 0) {
    return 0
  }

  return salePrice === price
    ? 0
    : parseFloat((((Number(price) - salePrice) / price) * 100).toFixed(0))
}
