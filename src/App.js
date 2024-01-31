import React, { useState } from 'react';
import Filter from './components/Filter';
import MovieList from './components/MovieList';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Movie 1',
      description: 'Description for Movie 1',
      posterURL: 'https://example.com/poster1.jpg',
      rating: 4,
    },
    {
      title: 'Movie 2',
      description: 'Description for Movie 2',
      posterURL: 'https://example.com/poster2.jpg',
      rating: 5,
    },
    // Add more movies as needed
  ]);

  const [filteredMovies, setFilteredMovies] = useState([]);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleAddMovie = () => {
    // Create a new movie object with dummy data for demonstration
    const newMovie = {
      title: 'New Movie',
      description: 'Description for the new movie',
      posterURL: 'https://example.com/poster3.jpg',
      rating: 3,
    };

    // Update the state to include the new movie
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const handleTitleChange = (event) => {
    // Update the title filter state
    setTitleFilter(event.target.value);
  };

  const handleRatingChange = (event) => {
    // Update the rating filter state
    setRatingFilter(event.target.value);
  };

  const handleFilter = () => {
    // Filter movies based on title and rating
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
        movie.rating >= parseFloat(ratingFilter)
    );

    // Update the state with filtered movies
    setFilteredMovies(filtered);
  };

  return (
    <Router>
    <Container className="mt-3">
      <Routes>
        <Route path="/" element={ MovieDetails}>
          <Row>
            <Col>
              <Filter
                onTitleChange={handleTitleChange}
                onRatingChange={handleRatingChange}
                onFilterChange={handleFilter}
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <Button variant="primary" onClick={handleFilter}>
                Filter
              </Button>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <MovieList movies={filteredMovies.length > 0 ? filteredMovies : movies} />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <Button variant="success" onClick={handleAddMovie}>
                Add Movie
              </Button>
            </Col>
          </Row>
        </Route>
        <Route path="/movie/:title" element={<MovieDetails movies={movies} />} />
      </Routes>
    </Container>
  </Router>
);
};


export default App;