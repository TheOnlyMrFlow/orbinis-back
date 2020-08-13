module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'pg',
        host: "${process.env.DATABASE_HOST}",
        user: "${process.env.DATABASE_USER}",
        password: "${process.env.DATABASE_PASSWORD}",
        database: "${process.env.DATABASE_NAME}",
        charset: 'utf8',
        ssl: { "rejectUnauthorized": false }
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
