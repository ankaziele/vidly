import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = (movie) => {
      console.log('handle delete', movie)
     const movies = this.state.movies.filter (m => m._id !== movie._id)
     this.setState({movies})
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map(movie =>
            <tr key={movie._id}>
              <td>
                {movie.title}
              </td>
              <td>
                {movie.genre.name}
              </td>
              <td>
                {movie.numberInStock}
              </td>
              <td>
                {movie.dailyRentalRate}
              </td>
              <td>
                <button className="btn btn-danger btn-sm m-2" onClick={() => this.handleDelete(movie)} id={movie.id}>Delete</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

export default Movies;