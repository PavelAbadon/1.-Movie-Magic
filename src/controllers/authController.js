import { Router } from "express";

const authController = Router();

authController.get('/', (req, res)=>{
    res.send('tuk trqbva da se vizualizira registration formata');
});


export default authController;
