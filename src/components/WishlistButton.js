

import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { addToWishlist, removeFromWishlist, isInWishlist } from '@/utils/localStorageUtils';

export default function WishlistButton({ carId }) {
  const [inWishlist, setInWishlist] = useState(false);

  useEffect(() => {
    setInWishlist(isInWishlist(carId));
  }, [carId]);

  const handleToggle = () => {
    if (inWishlist) {
      removeFromWishlist(carId);
    } else {
      addToWishlist(carId);
    }
    setInWishlist(!inWishlist);
  };

  return (
    <Button variant={inWishlist ? 'danger' : 'outline-danger'} onClick={handleToggle}>
      {inWishlist ? 'Remove from Wishlist ❤️' : 'Add to Wishlist 🤍'}
    </Button>
  );
}
