/**
 * Strapi API utilities
 * This file contains utilities for connecting to a Strapi CMS instance
 */

// Define types for Strapi API responses
export interface StrapiResponse<T> {
  data: {
    id: number;
    attributes: T;
  }[] | {
    id: number;
    attributes: T;
  };
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Define common data structures
export interface StrapiImage {
  data: {
    id: number;
    attributes: {
      url: string;
      width: number;
      height: number;
      alternativeText?: string;
    };
  };
}

export interface StrapiCommonFields {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Configuration for Strapi API
const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

/**
 * Fetches data from Strapi API
 * @param endpoint - API endpoint to fetch from
 * @param params - Optional query parameters
 * @returns Promise with the response data
 */
export async function fetchAPI<T>(
  endpoint: string,
  params?: Record<string, string | number | boolean>
): Promise<StrapiResponse<T>> {
  const headers = {
    'Content-Type': 'application/json',
  };

  // Add authorization header if API token exists
  if (STRAPI_API_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_API_TOKEN}`;
  }

  // Build query string
  const queryString = params
    ? `?${Object.keys(params)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
        )
        .join('&')}`
    : '';

  // Make the API request
  const res = await fetch(`${STRAPI_API_URL}/api/${endpoint}${queryString}`, {
    headers,
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  });

  if (!res.ok) {
    console.error(`API request failed: ${res.status} ${res.statusText}`);
    throw new Error(`Failed to fetch data from Strapi API (${res.status})`);
  }

  const data = await res.json();
  return data;
}

/**
 * Helper function to extract a single item from Strapi response
 */
export function extractStrapiItem<T>(response: StrapiResponse<T>): T & { id: number } {
  if (!response.data) {
    throw new Error('No data found in Strapi response');
  }

  const item = Array.isArray(response.data)
    ? response.data[0]
    : response.data;

  if (!item) {
    throw new Error('No items found in Strapi response');
  }

  return {
    id: item.id,
    ...item.attributes as T
  };
}

/**
 * Helper function to extract multiple items from Strapi response
 */
export function extractStrapiItems<T>(response: StrapiResponse<T>): (T & { id: number })[] {
  if (!response.data || !Array.isArray(response.data)) {
    return [];
  }

  return response.data.map(item => ({
    id: item.id,
    ...item.attributes as T
  }));
}

/**
 * Helper function to extract image URL from Strapi response
 */
export function getStrapiImageUrl(image: StrapiImage | null | undefined): string | null {
  if (!image || !image.data || !image.data.attributes) {
    return null;
  }

  const { url } = image.data.attributes;

  if (url.startsWith('/')) {
    return `${STRAPI_API_URL}${url}`;
  }

  return url;
}

/**
 * Helper function to extract media URLs from Strapi response
 */
export function getStrapiMediaUrl(path: string): string {
  if (path.startsWith('/')) {
    return `${STRAPI_API_URL}${path}`;
  }
  return path;
}
