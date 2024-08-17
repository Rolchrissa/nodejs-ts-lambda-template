import axios from "axios";

const ping = async (_req, res) => {
  try {
    console.log("Google found!");
    console.log("environment: ", process.env.ENVIRONMENT);
    axios
      .get("https://www.google.com", {
        timeout: 10000,
      })
      .then(function (_res) {
        res.json({ message: "pong with internet access" }).status(200);
      })
      .catch(function (err) {
        console.log(err);
        console.log("Cannot find Google");
        res.json({ message: "pongn't no internet access" }).status(501);
      });

    return;
  } catch (error) {
    console.log(error);
    res.json({ error: JSON.stringify(error) }).status(500);
  }
};

export { ping };
