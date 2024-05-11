import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/errorMiddleware.js";
import router from "./routes/route.js"; // Import without curly braces

const app = express();
dotenv.config({ path: './config/config.env' });

app.use(cors({
    origin: [process.env.FRONTEND_URL , "http://localhost:5173"],
    methods: ["POST"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use('/api/v1/reservation', router);
app.options('*', cors());

dbConnection();

app.use(errorMiddleware);

export default app;
