import React from 'react';
import './MovieTable.css';

const MovieTable = ({ movies }) => {
    return (
    <table>
        <thead>
        <tr>
            <th>Titel</th>
            <th>År</th>
            <th>Genre</th>
            <th>Regissör</th>
        </tr>
        </thead>
        <tbody>
            {movies.map((movie) => (
                <tr key={movie.id}>
                    <td>{movie.title}</td>
                    <td>{movie.releaseYear}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.director}</td>
                </tr>
            ))}
        </tbody>
    </table>
    );
};

export default MovieTable;