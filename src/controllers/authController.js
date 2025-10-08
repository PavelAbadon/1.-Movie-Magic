import { Router } from "express";
import authService from "../services/authService.js";

const authController = Router();

authController.get('/register', (req, res) => {
    res.render('auth/register', {pageTitle:'Register'});
});

authController.post('/register', async(req, res) => {
    const authData = req.body;
    //console.log(authData)
    await authService.register(authData);
    res.redirect('/');
});


export default authController;
