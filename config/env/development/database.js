// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'sqlite',
//         filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('MONGO_HOST'),
        srv: true,
        port: 27017,
        database: 'strapi',
        username: env('MONGO_USER'),
        password: env('MONGO_PASSWORD'),
      },
      options: {
        authenticationDatabase: 'admin',
        ssl: true
      }
    }
  }
});
