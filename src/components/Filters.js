import { Form, Row, Col } from 'react-bootstrap';

export default function Filters({ filters, setFilters }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Form className="mb-4">

      {/* 🔍 Search Bar */}
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="search">
            <Form.Label>Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search by brand or model"
              name="search"
              value={filters.search}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>

      {/* 🔽 Filters */}
      <Row>
        <Col md={3}>
          <Form.Group controlId="brand">
            <Form.Label>Brand</Form.Label>
            <Form.Control as="select" name="brand" value={filters.brand} onChange={handleChange}>
              <option value="">All</option>
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
              <option value="Ford">Ford</option>
              <option value="Hyundai">Hyundai</option>
              <option value="Volkswagen">Volkswagen</option>
              <option value="Kia">Kia</option>
              <option value="Maruti">Maruti</option>
              <option value="Renault">Renault</option>
              <option value="Tata">Tata</option>
              <option value="Mahindra">Mahindra</option>
            </Form.Control>
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="fuelType">
            <Form.Label>Fuel Type</Form.Label>
            <Form.Control as="select" name="fuelType" value={filters.fuelType} onChange={handleChange}>
              <option value="">All</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
            </Form.Control>
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="priceRange">
            <Form.Label>Max Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter max price"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="sortBy">
            <Form.Label>Sort By</Form.Label>
            <Form.Control as="select" name="sortBy" value={filters.sortBy} onChange={handleChange}>
              <option value="">Default</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}

