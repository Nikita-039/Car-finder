
import { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CarCard from '@/components/CarCard';
import { getWishlist } from '@/utils/localStorageUtils';

export default function WishlistPage() {
  const [cars, setCars] = useState([]);
  const [wishlistIds, setWishlistIds] = useState([]);

  useEffect(() => {
    setWishlistIds(getWishlist());
  }, []);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch('/cars.json');
        const data = await res.json();
        const filtered = data.filter(car => wishlistIds.includes(car.id));
        setCars(filtered);
      } catch (err) {
        console.error('Failed to load wishlist cars:', err);
      }
    };

    if (wishlistIds.length > 0) fetchCars();
    else setCars([]);
  }, [wishlistIds]);

  return (
    <Container className="my-4">
      <h1 className="mb-4">My Wishlist 💖</h1>

      {cars.length === 0 ? (
        <p>No cars in your wishlist.</p>
      ) : (
        <Row>
          {cars.map((car) => (
            <Col key={car.id} md={4} className="mb-4">
              <CarCard car={car} />
            </Col>
          ))}
        </Row>
      )}

      <Button variant="link" href="/" className="mt-4">
        &larr; Back to Home
      </Button>
    </Container>
  );
}
