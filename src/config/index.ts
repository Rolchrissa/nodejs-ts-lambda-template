import prod from "./prod";
import staging from "./stage";

enum Environments {
  Staging = "staging",
  Prod = "prod",
}

const config = () => {
  switch (process.env.ENVIRONMENT) {
    case Environments.Staging:
      return staging;
    case Environments.Prod:
      return prod;
    default:
      return staging;
  }
};

export = config();
