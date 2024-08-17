import cors from "cors";
import express from "express";
import morgan from "morgan";
import config from "./config";
import { router } from "./routes";
const { ENVIRONMENT } = config.SERVER;

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

console.log("ENVIRONMENT:", ENVIRONMENT);

app.use("/", router);

export default app;
