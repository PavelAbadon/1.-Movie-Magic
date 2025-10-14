import { Router } from "express";
import authService from "../services/authService.js";
import { isGuest, isAuth } from "../middlewares/authMiddleware.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const authController = Router();

authController.get('/register', isGuest, (req, res) => {
    res.render('auth/register', {pageTitle:'Register'});
});

authController.post('/register', isGuest, async(req, res) => {
    const authData = req.body;

    try {
        const token = await authService.register(authData);
        res.cookie('auth', token);
        res.redirect('/');

    } catch (err) {
        let errorMessage = getErrorMessage(err);

        res.status(400).render('auth/register', {  error: errorMessage, user: authData  });

    }
    
});

authController.get('/login', isGuest, (req, res) => {
    res.render('auth/login', {pageTitle:'Login'});
});

authController.post('/login', isGuest, async (req, res) => {
    const{email, password} = req.body;
    const token = await authService.login(email, password);

    res.cookie('auth', token)
    

    res.redirect('/');
});

authController.get('/logout', isAuth, (req,res) => {
    res.clearCookie('auth');
    
    res.redirect('/');
});


export default authController;
