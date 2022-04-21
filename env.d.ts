declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CLIENT_ID: string
      CLIENT_SECRET: string
      CLIENT_DOMAIN: string
      MYSQL_HOST: string
      MYSQL_PORT: string
      MYSQL_USER: string
      MYSQL_PASSWORD: string
      MYSQL_DATABASE: string
      MONGODB_PASSWORD: string
      MONGODB_USER: string
    }
  }
}

export {};
