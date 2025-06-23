// localStorage utilities for client-side storage management

/**
 * Save data to localStorage
 * @param key - The key to store the data under
 * @param value - The value to store (will be JSON stringified)
 */
export const saveToStorage = <T>(key: string, value: T): void => {
  if (typeof window !== 'undefined') {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(`Error saving to localStorage:`, error);
    }
  }
};

/**
 * Get data from localStorage
 * @param key - The key to retrieve the data from
 * @returns The parsed value or null if not found or error
 */
export const getFromStorage = <T>(key: string): T | null => {
  if (typeof window !== 'undefined') {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error reading from localStorage:`, error);
      return null;
    }
  }
  return null;
};

/**
 * Remove data from localStorage
 * @param key - The key to remove
 */
export const removeFromStorage = (key: string): void => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing from localStorage:`, error);
    }
  }
};

/**
 * Clear all data from localStorage
 */
export const clearStorage = (): void => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.clear();
    } catch (error) {
      console.error(`Error clearing localStorage:`, error);
    }
  }
};

/**
 * Check if a key exists in localStorage
 * @param key - The key to check
 * @returns boolean indicating if the key exists
 */
export const hasKey = (key: string): boolean => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key) !== null;
  }
  return false;
};

/**
 * Get all keys from localStorage
 * @returns Array of all keys
 */
export const getAllKeys = (): string[] => {
  if (typeof window !== 'undefined') {
    return Object.keys(localStorage);
  }
  return [];
};

/**
 * Get localStorage usage information
 * @returns Object with storage usage details
 */
export const getStorageInfo = (): {
  totalKeys: number;
  totalSize: number;
  availableSpace: number;
} => {
  if (typeof window !== 'undefined') {
    const keys = Object.keys(localStorage);
    let totalSize = 0;
    
    keys.forEach(key => {
      const value = localStorage.getItem(key) || '';
      totalSize += key.length + value.length;
    });

    // Estimate available space (localStorage typically has ~5-10MB limit)
    const estimatedLimit = 5 * 1024 * 1024; // 5MB in bytes
    const availableSpace = Math.max(0, estimatedLimit - totalSize);

    return {
      totalKeys: keys.length,
      totalSize,
      availableSpace
    };
  }
  
  return {
    totalKeys: 0,
    totalSize: 0,
    availableSpace: 0
  };
};

/**
 * Save data with expiration
 * @param key - The key to store the data under
 * @param value - The value to store
 * @param expirationMs - Expiration time in milliseconds
 */
export const saveWithExpiration = <T>(key: string, value: T, expirationMs: number): void => {
  const now = new Date().getTime();
  const item = {
    value,
    expiration: now + expirationMs
  };
  saveToStorage(key, item);
};

/**
 * Get data with expiration check
 * @param key - The key to retrieve the data from
 * @returns The value or null if expired or not found
 */
export const getWithExpiration = <T>(key: string): T | null => {
  const item = getFromStorage<{ value: T; expiration: number }>(key);
  
  if (!item) {
    return null;
  }
  
  const now = new Date().getTime();
  
  if (now > item.expiration) {
    removeFromStorage(key);
    return null;
  }
  
  return item.value;
};

// Pre-defined storage keys for consistent usage across the app
export const STORAGE_KEYS = {
  USER_INFO: 'userInfo',
  USER_PREFERENCES: 'userPreferences',
  THEME: 'theme',
  LANGUAGE: 'language',
  CACHE: 'cache',
  SESSION: 'session'
} as const;

// Type for storage keys
export type StorageKey = typeof STORAGE_KEYS[keyof typeof STORAGE_KEYS];

