import { Router } from "express";
import movieService from "../services/movieService.js";
import castService from "../services/castService.js";
import { isAuth } from "../middlewares/authMiddleware.js";
 
const movieController = Router();

movieController.get('/create', isAuth, (req, res) =>{
    
    res.render('movies/create', {pageTitle:'Create Movie'});
});

movieController.post('/create', isAuth, async(req, res) =>{
    const movieData = req.body;
    const creatorId = req.user.id;
    await movieService.create(movieData, creatorId);
    
    res.redirect('/');
});

movieController.get('/:movieId/details', async(req, res) =>{
    const movieId = req.params.movieId;
    const movie =  await movieService.getOne(movieId);
    const movieCasts = await castService.getAll({includes: movie.casts});

    const ratingViewData = `&#x2605`.repeat(Math.round(movie.rating));
    const isCreator = movie.creator &&  movie.creator.equals(req.user?.id);
    

    res.render('movies/details', { movie, isCreator, casts: movieCasts, rating: ratingViewData, pageTitle:'Movie Magic / Details' });
} )

movieController.get('/search', async(req, res) =>{
    const filter = req.query;
    const movies = await movieService.getAll(filter);
    
    res.render("search", { movies, filter, pageTitle:'Search Movies'});
})

movieController.get('/:movieId/attach', async(req, res) =>{
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId);
    const casts = await castService.getAll();

    
    res.render('casts/attach', { movie, casts, pageTitle:'Movie Magic / Attach' });
} )

movieController.post('/:movieId/attach', async(req, res) =>{
    const movieId = req.params.movieId;
    const castId = req.body.cast;

    await movieService.attach(movieId, castId);

    res.redirect(`/movies/${movieId}/details`);

     
})

export default movieController;

