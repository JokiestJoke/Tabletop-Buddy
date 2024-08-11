import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router as welcomeRouter } from './routes/welcome.routes.js';

dotenv.config();

//express app initialization
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Versioning.
const apiVersion = '/api/v1';

// Welcome Route.
app.use(`${apiVersion}/`, welcomeRouter);

export default app;