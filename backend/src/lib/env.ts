interface Env {
  mongoUrl: string;
  port: number;
  secret: string;
}

const env: Env = {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017',
  port: Number(process.env.PORT) || 5000,
  secret: process.env.SECRET || 'abcd90',
};

export default env;
