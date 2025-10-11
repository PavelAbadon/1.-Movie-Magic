import { Router } from "express";
import authService from "../services/authService.js";
import { isGuest, isAuth } from "../middlewares/authMiddleware.js";

const authController = Router();

authController.get('/register', isGuest, (req, res) => {
    res.render('auth/register', {pageTitle:'Register'});
});

authController.post('/register', isGuest, async(req, res) => {
    const authData = req.body;
    //console.log(authData)
    await authService.register(authData);
    res.redirect('/');
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
