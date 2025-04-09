
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import WishlistButton from '@/components/WishlistButton';

export default function CarDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchCar = async () => {
      try {
        const res = await fetch('/cars.json');
        const data = await res.json();
        const selectedCar = data.find((c) => c.id === id);
        setCar(selectedCar);
        setLoading(false);
      } catch (err) {
        console.error('Failed to load car data:', err);
        setLoading(false);
      }
    };

    fetchCar();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!car) return <p>Car not found.</p>;

  return (
    <Container className="my-4">
      <Button variant="link" onClick={() => router.back()}>&larr; Back</Button>
      <Row className="mt-3">
        <Col md={6}>
          <Image src={car.image} alt={car.model} fluid />
        </Col>
        <Col md={6}>
          <h2>{car.brand} {car.model}</h2>
          <p><strong>Price:</strong> ${car.price}</p>
          <p><strong>Fuel Type:</strong> {car.fuelType}</p>
          <p><strong>Seating Capacity:</strong> {car.seating}</p>
          <WishlistButton carId={car.id} />
        </Col>
      </Row>
    </Container>
  );
}
