import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const MovieCard = ({ title, description, posterURL, rating, trailerLink }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Link to={`/movie/${title}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card.Img variant="top" src={posterURL} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Rating: {rating}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default MovieCard;