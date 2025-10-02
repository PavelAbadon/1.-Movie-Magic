import Movie from "../models/Movie.js";



export default{
    async getAll(filter) {
        const result = await Movie.find(filter);
        return result;

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