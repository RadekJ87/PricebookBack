import cors from "cors";
import express, {Router} from "express";
import "express-async-errors";
import {priceRouter} from "./routers/price.router";
import {handleError, ValidationError} from "./utils/error";
import './utils/db';
import rateLimit from "express-rate-limit";

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));


app.use(express.json());

app.use(rateLimit({
    windowMs: 8 * 60 * 1000,
    max: 50
}))

// const router = Router();
app.use('/price', priceRouter);


app.use(handleError);


app.listen(3001, 'localhost', () => {
    console.log('Listening on http://localhost:3001');
})
