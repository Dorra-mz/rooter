import React from 'react';
import Form from 'react-bootstrap/Form';

const Filter = ({ onTitleChange, onRatingChange, onFilterChange }) => {
  const handleFilterChange = () => {
    // Implement logic to trigger the filter change
    if (onFilterChange) {
      onFilterChange();
    }
  };

  return (
    <Form>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" onChange={onTitleChange} />
      </Form.Group>

      <Form.Group controlId="formRating">
        <Form.Label>Rating</Form.Label>
        <Form.Control type="number" placeholder="Enter rating" onChange={onRatingChange} />
      </Form.Group>

      <Form.Group controlId="formFilter">
        <Form.Control type="hidden" onChange={handleFilterChange} />
      </Form.Group>
    </Form>
  );
};

export default Filter;
