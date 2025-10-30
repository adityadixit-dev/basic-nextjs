import {
  logErrorToConsoleInDev,
  logToConsoleInDev,
} from "@/utils/log-in-dev-mode";

try {
  process.loadEnvFile();
} catch (err) {
  logToConsoleInDev("unable to read env file");
  logErrorToConsoleInDev(err);
}

type SiteConfig = {
  db: DBConfig;
};
type DBConfig = {
  url: string;
};

const config: SiteConfig = {
  db: {
    url: getEnvOrThrow("DATABASE_URL"),
  },
};

export default config;

function getEnvOrThrow(envName: string): string {
  const envValue = process.env[envName];
  if (!envValue) {
    throw new Error(`ENV variable ${envName} not found`);
  }
  return envValue;
}
