import {Router} from "express";

export const priceRouter = Router()
    .get('/', async (req, res) => {
        res.send({"hej": "Witaj"});
    });