import { DataSourceOptions } from 'typeorm';
export const DBconfig: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  username: 'root',
  port: 3306,
  password: '1199',
  database: 'blog',
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
};
