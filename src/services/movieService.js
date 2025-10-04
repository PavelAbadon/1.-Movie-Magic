import Movie from "../models/Movie.js";



export default{
    getAll(filter) {
        let query = Movie.find();

        if(filter){
            if (filter.title) {
            // TODO Search by title, partial match, case insensitive
            query = query.find({ title: { $regex: filter.title, $options: 'i' } });
        }

        if (filter.genre) {
            // TODO Search by genre, exact match, case insensitive
            query = query.find({ genre: { $regex: new RegExp(`^${filter.genre}$`), $options: 'i' } })
        }

        if(filter.year){
          query = query.where('year').equals(filter.year);
        }

        if(filter.rating){
          query = query.where('rating').gte(filter.rating);
        }
        }
        


        return query;
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