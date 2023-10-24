import React, { useState } from 'react';
import './MovieForm.css';

const MovieForm = ({ onAdd }) => {

    const [form, setForm] = useState({ // set first state object
        title: "",
        plot: "",
        genre: "sci-fi",
        director: "",
        releaseYear: 0
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        const movie = { ...form};

        onAdd(movie);
    };

    const handleChange = (event) => {

        const {name, value} = event.target;

        setForm({
            ...form,
            [name]: value,
        });

    };

  return (
    <form onSubmit={handleSubmit} className="mb-10 grid gap-4">
        <div>
        <label htmlFor="title" className="block mb-2">
            Titel
        </label>
        <input 
            type="title" 
            id="title" 
            className="border border-zinc-950"
            name="title"
            value={form.title}
            onChange={handleChange} 
            />
        </div>

        <div>
        <label htmlFor="plot" className="block mb-2">
            Handling
        </label>
        <textarea 
            id="plot" 
            name="plot"
            className="border border-zinc-950"
            value={form.plot}
            onChange={handleChange} >
        </textarea>
        </div>

        <div>
        <label htmlFor="genre" className="block mb-2">
            Genre
        </label>
        <select id="genre" value={form.genre} name="genre" onChange={handleChange} >
            <option value="sci-fi">Sci-Fi</option>
            <option value="horror">Skräck</option>
            <option value="comedy">Komedi</option>
            <option value="adventure">Äventyr</option>
            <option value="fantasy">Fantasi</option>
            <option value="action">Action</option>
            <option value="children">Barnfilm</option>
            <option value="drama">Drama</option>
            <option value="mystery">Mysterium</option>
        </select>
        </div>

        <div>
        <label htmlFor="director" className="block mb-2">
            Regissör
        </label>
        <input 
            type="text" 
            id="director" 
            name="director"
            className="border border-zinc-950"
            value={form.director}
            onChange={handleChange}  
            />
        </div>

        <div>
        <label htmlFor="releaseYear" className="block mb-2">
            År
        </label>
        <input 
            type="number" 
            id="releaseYear" 
            name="releaseYear"
            className="border border-zinc-950"
            value={form.releaseYear}
            onChange={handleChange} 
            />
        </div>

        <button className="btn btn-blue">Lägg till</button>

    </form>
  )
}

export default MovieForm