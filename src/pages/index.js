import { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CarCard from '@/components/CarCard';
import Filters from '@/components/Filters';

export default function Home() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    brand: '',
    fuelType: '',
    maxPrice: '',
    sortBy: '',
    search: ''  
  });

  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 10;

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch('/cars.json');
        const data = await res.json();
        setCars(data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch cars:', err);
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  // Filter logic
  const filteredCars = cars.filter((car) => {
    const matchesSearch = filters.search
      ? (
          car.brand.toLowerCase().includes(filters.search.toLowerCase()) ||
          car.model.toLowerCase().includes(filters.search.toLowerCase())
        )
      : true;

    return (
      matchesSearch &&
      (!filters.brand || car.brand === filters.brand) &&
      (!filters.fuelType || car.fuelType === filters.fuelType) &&
      (!filters.maxPrice || car.price <= parseInt(filters.maxPrice))
    );
  });

  // Sort logic
  let sortedCars = [...filteredCars];

  if (filters.sortBy === 'priceLowHigh') {
    sortedCars.sort((a, b) => a.price - b.price);
  } else if (filters.sortBy === 'priceHighLow') {
    sortedCars.sort((a, b) => b.price - a.price);
  }

  // Pagination logic
  const indexOfLast = currentPage * carsPerPage;
  const indexOfFirst = indexOfLast - carsPerPage;
  const currentCars = sortedCars.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(sortedCars.length / carsPerPage);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  // Reset to page 1 when filters or sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  return (
    <Container className="my-4">
      <h1 className="mb-4">Car Finder 🚗</h1>

      <Filters filters={filters} setFilters={setFilters} />

      {loading ? (
        <p>Loading cars...</p>
      ) : currentCars.length === 0 ? (
        <p>No cars match your filters.</p>
      ) : (
        <>
          <Row>
            {currentCars.map((car) => (
              <Col key={car.id} md={4} className="mb-4">
                <CarCard car={car} />
              </Col>
            ))}
          </Row>

          {/* Pagination Controls */}
          <div className="d-flex justify-content-between align-items-center mt-4">
            <Button variant="outline-primary" onClick={handlePrev} disabled={currentPage === 1}>
              ← Previous
            </Button>
            <span>Page {currentPage} of {totalPages}</span>
            <Button variant="outline-primary" onClick={handleNext} disabled={currentPage === totalPages}>
              Next →
            </Button>
          </div>
        </>
      )}
    </Container>
  );
}

