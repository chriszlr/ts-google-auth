import dotenv from "dotenv";
dotenv.config();
import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import passport from "passport";
import session from "express-session";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes";
import "./passport";
const app: Application = express();
const origin = "http://localhost:5173";

// middleware
app.use(
  session({
    secret: `${process.env.SESSION_SECRET}`,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin, credentials: true }));
app.use(morgan("dev"));
app.use(helmet());

// routes
app.use("/auth", authRoutes);

// connect to mongodb
mongoose
  .connect(`${process.env.MONGO_URI}`)
  .then(() => console.log("MongoDB connected"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
