import { useRouter } from 'next/router';
import { Card, Button } from 'react-bootstrap';
import WishlistButton from './WishlistButton';

export default function CarCard({ car }) {
  const router = useRouter();

  const handleViewDetails = () => {
    router.push(`/car/${car.id}`);
  };

  return (
    <Card>
      <Card.Img variant="top" src={car.image} alt={car.model} />
      <Card.Body>
        <Card.Title>{car.brand} {car.model}</Card.Title>
        <Card.Text>
          💰 Price: ${car.price}<br />
          ⛽ Fuel: {car.fuelType}<br />
          👥 Seats: {car.seating}
        </Card.Text>
        <div className="d-flex flex-column gap-2">
          <Button variant="primary" onClick={handleViewDetails}>
            View Details
          </Button>
          <WishlistButton carId={car.id} />
        </div>
      </Card.Body>
    </Card>
  );
}

