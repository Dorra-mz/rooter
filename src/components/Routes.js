import React from 'react';
import { Route } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import Button from 'react-bootstrap/Button';

const Routes = ({ movies, filteredMovies, handleTitleChange, handleRatingChange, handleFilter, handleAddMovie }) => {
  return (
    <>
      {/* Home page */}
      <Route path="/" exact>
        <MovieList
          movies={filteredMovies.length > 0 ? filteredMovies : movies}
          onTitleChange={handleTitleChange}
          onRatingChange={handleRatingChange}
          onFilterChange={handleFilter}
        />
        {/* Add Movie button */}
        <Button variant="success" onClick={handleAddMovie}>
          Add Movie
        </Button>
      </Route>
      {/* Movie Details page */}
      <Route path="/movie/:title">
        <MovieDetails movies={movies} />
      </Route>
    </>
  );
};

export default Routes;