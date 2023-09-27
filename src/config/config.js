require('dotenv').config();

const environment = process.env.NODE_ENV || 'dev';

const suffix = {
  dev: '-dev',
  development: '-dev',
};

const options = {
  host: process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQL_PORT || '3306',
  database: 
    `${process.env.MYSQL_DB_NAME || 'hp-api'}${suffix[environment] || suffix.dev}`,
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '1234',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: process.env.DEBUG !== 'false',
  define: { underscored: true, timestamps: false },
};

module.exports = {
  development: {
    ...options,
  },
};