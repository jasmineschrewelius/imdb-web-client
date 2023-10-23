import React, { useState } from 'react';
import './MovieForm.css';

const MovieForm = () => {

    const [form, setForm] = useState({ // set first state object
        title: "",
        plot: "",
        genre: "sci-fi",
        director: "",
        releaseYear: 0
    });
  return (
    <form className="mb-10 grid gap-4">
        <div>
        <label htmlFor="title" className="block mb-2">
            Titel
        </label>
        <input 
            type="title" 
            id="title" 
            className="border border-zinc-950"
            value={form.title}/>
        </div>

        <div>
        <label htmlFor="plot" className="block mb-2">
            Handling
        </label>
        <textarea 
            id="plot" 
            className="border border-zinc-950"
            value={form.plot}>
        </textarea>
        </div>

        <div>
        <label htmlFor="genre" className="block mb-2">
            Genre
        </label>
        <select id="genre" value={form.genre} >
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
            className="border border-zinc-950"
            value={form.director} />
        </div>

        <div>
        <label htmlFor="releaseYear" className="block mb-2">
            År
        </label>
        <input 
            type="number" 
            id="releaseYear" 
            className="border border-zinc-950"
            value={form.releaseYear}/>
        </div>

        <button className="btn btn-blue">Lägg till</button>

    </form>
  )
}

export default MovieForm