module.exports = {
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  database: 'todoI',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  logging: true,
  useUnifiedTopology: true,
};
