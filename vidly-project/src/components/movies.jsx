import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService";

export default class Movies extends Component {
	state = {
		movies: getMovies()
	}

	handleDelete = movie => {
		const movies = this.state.movies.filter(m => m._id !== movie._id)
		//this.setState({ movies: movies })
		//can be simplified to just:
		this.setState({ movies })
	}

	renderMessage() {
		const { length: count } = this.state.movies

		if (count === 0) return <p>There are no movies</p>
		if (count === 1) return <p>There is one movie</p>
		return <p>There are {count} movies</p>
	}

	render() {
		return (
			<>
				{this.renderMessage()}
				{this.state.movies.length > 0 &&
					<table className="table">
						<thead>
							<tr>
								<th scope="col">Title</th>
								<th scope="col">Genre</th>
								<th scope="col">Stock</th>
								<th scope="col">Rate</th>
								<th scope="col"></th>
							</tr>
						</thead>
						<tbody>
							{this.state.movies.map(movie =>
								<tr key={movie._id}>
									<td>{movie.title}</td>
									<td>{movie.genre.name}</td>
									<td>{movie.numberInStock}</td>
									<td>{movie.dailyRentalRate}</td>
									<td>
										<button
											onClick={() => this.handleDelete(movie)} 
											//it has to be called here with arrow function to pass parameter
											type="button"
											className="btn btn-danger"
										>
											Delete
                  </button>
									</td>
								</tr>
							)}
						</tbody>
					</table>
				}
			</>

		);
	}
}
