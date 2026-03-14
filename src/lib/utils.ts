import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isPureAppRouteHref(href: string) {
  return href.startsWith("/") && !href.includes("#")
}
