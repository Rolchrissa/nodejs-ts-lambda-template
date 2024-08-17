import { config as envConfig } from "dotenv";
envConfig();

const defaults = {
  SERVER: {
    PORT: 3000,
    CORS: "localhost:3001",
    HOST: "localhost",
    ENVIRONMENT: "staging",
  },
};

export = {
  SERVER: {
    PORT: process.env.PORT || defaults.SERVER.PORT,
    CORS: process.env.WEB_URL || defaults.SERVER.CORS,
    HOST: process.env.HOST || defaults.SERVER.HOST,
    ENVIRONMENT: process.env.ENVIRONMENT || defaults.SERVER.ENVIRONMENT,
  },
};
