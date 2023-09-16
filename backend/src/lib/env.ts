interface Env {
  mongoUrl: string;
  port: number;
}

const env: Env = {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017',
  port: Number(process.env.PORT) || 5000,
};

export default env;
