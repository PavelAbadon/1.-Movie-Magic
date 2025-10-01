import Movie from "../models/Movie.js";



export default{
    getAll(filter) {
        return Movie.find(filter);

    },

    create(movieData){
        movieData.rating = Number(movieData.rating);
        const movie = new Movie (movieData);
        return movie.save();
        
    },
    getOne(movieId){
        return Movie.findOne({_id: movieId})
    }
}