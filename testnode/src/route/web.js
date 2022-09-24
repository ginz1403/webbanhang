import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app)=> {
    router.get('/', homeController.getHomePage);

    
    router.get('/genshin', (req, res) =>{
        return res.send('Genshin Impact')
    });


    return app.use("/", router);
}
module.exports = initWebRoutes;