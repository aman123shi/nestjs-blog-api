import { DataSource, DataSourceOptions } from 'typeorm';

export const DBconfig: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  username: 'root',
  port: 3306,
  password: '1199',
  database: 'blog',
  synchronize: true,
  logging: true,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  subscribers: [],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
};
export const dataSource = new DataSource(DBconfig);
async () => {
  await dataSource.initialize();
};
