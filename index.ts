import cors from "cors";
import express, {Router} from "express";
import "express-async-errors";
import {priceRouter} from "./routers/price.router";
import {handleError, ValidationError} from "./utils/error";


const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(express.json());

const router = Router();
router.use('/price', priceRouter);


app.use(handleError);


app.listen(3001, '0.0.0.0', () => {
    console.log('Listening on http://localhost:3001');
})
