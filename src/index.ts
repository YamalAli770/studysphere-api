require("dotenv").config();

import express from "express";
import http from "http";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

// Get port from environment variables
const PORT = process.env.PORT;

// Initialize express
const app = express();

// Middlewares
app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Create server
const server = http.createServer(app);

// Listen to requests on server
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})