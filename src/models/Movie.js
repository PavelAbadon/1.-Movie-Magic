import { Schema, model } from "mongoose";

const movieShema = new Schema({
    title: String,
    genre: String,
    director: String,
    year: Number,
    imageUrl: String,
    rating: Number,
    description: String,
});

const Movie = model('Movie', movieShema);

export default Movie;
