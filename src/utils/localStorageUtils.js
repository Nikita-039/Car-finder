// /src/utils/localStorageUtils.js

const WISHLIST_KEY = 'wishlist_cars';

export const getWishlist = () => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(WISHLIST_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const addToWishlist = (carId) => {
  const current = getWishlist();
  if (!current.includes(carId)) {
    const updated = [...current, carId];
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(updated));
  }
};

export const removeFromWishlist = (carId) => {
  const current = getWishlist();
  const updated = current.filter((id) => id !== carId);
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(updated));
};

export const isInWishlist = (carId) => {
  return getWishlist().includes(carId);
};
