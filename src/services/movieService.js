import Movie from "../models/Movie.js";



export default{
    getAll() {
        return Movie.find();
    },
    create(movieData){
        console.log(movieData);
        const movie = new Movie (movieData);
        
        return movie.save();
        
    }
}