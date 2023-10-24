import React from 'react';
import './MovieTable.css';

const MovieTable = ({ movies, onDelete }) => {
    return (
    <table>
        <thead>
        <tr>
            <th>Titel</th>
            <th>År</th>
            <th>Genre</th>
            <th>Regissör</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
            {movies.map((movie) => (
                <tr key={movie.id}>
                    <td>{movie.title}</td>
                    <td>{movie.releaseYear}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.director}</td>
                    <td>
                        <button onClick={e => onDelete(movie.id)}>Radera</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    );
};

export default MovieTable;