/**
 * API Configuration
 *
 * This file centralizes API base URL configuration for easy platform management.
 * You can override the base URL by setting the NEXT_PUBLIC_API_BASE_URL environment variable.
 *
 * Usage:
 * - Development: Uses http://localhost:3001 by default
 * - Production: Set NEXT_PUBLIC_API_BASE_URL=https://api.yourdomain.com
 * - Staging: Set NEXT_PUBLIC_API_BASE_URL=https://staging-api.yourdomain.com
 */

// Get API base URL from environment variable or use default
const getApiBaseUrl = (): string => {
  // Check for environment variable first (for different platforms)
  if (typeof window !== "undefined") {
    // Client-side: use environment variable or default
    return process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001";
  }
  // Server-side: use environment variable or default
  return process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001";
};

export const API_BASE_URL = getApiBaseUrl();

/**
 * Builds a complete API endpoint URL
 * @param endpoint - The API endpoint path (e.g., '/api/inquiries')
 * @returns Complete URL string
 */
export const getApiUrl = (endpoint: string): string => {
  const baseUrl = API_BASE_URL.replace(/\/$/, ""); // Remove trailing slash
  const path = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  return `${baseUrl}${path}`;
};

/**
 * API Endpoints
 */
export const API_ENDPOINTS = {
  INQUIRIES: "/api/inquiries",
} as const;

/**
 * Get full URL for inquiries endpoint
 */
export const getInquiriesUrl = (): string => {
  return getApiUrl(API_ENDPOINTS.INQUIRIES);
};
