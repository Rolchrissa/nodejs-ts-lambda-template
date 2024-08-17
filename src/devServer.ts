import config from "src/config";
import app from "src/main";
const server = config.SERVER;
const { PORT, HOST } = server;

app.listen(PORT, () => {
  console.info(`Server up and running: ${HOST}:${PORT} `);
});
