import Cast from "../models/cast.js";
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

    create(movieData, creatorId){
               
        return Movie.create({
            ...movieData,
            rating:  Number(movieData.rating),
            creator: creatorId,
        });
        
    },
    getOne(movieId){
        return Movie.findOne({_id: movieId})
    },

    async attach(movieId, castId){
        const movie = await Movie.findById(movieId);
        movie.casts.push(castId);

        return movie.save();
    },
    delete(movieId){
        return Movie.findByIdAndDelete(movieId);

    }

}