module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        // client: 'sqlite',
        // filename: env('DATABASE_FILENAME', '.tmp/data.db'),
        client: 'pg',
        host: 'ec2-54-217-206-236.eu-west-1.compute.amazonaws.com',
        user: 'cseottvlrewbnu',
        password: '500c51ce2a5fa174709bd39765da6f91a0a86217568e616c1deec85c40a61c4c',
        database: 'dehm0mogejc9g1',
        charset: 'utf8',
        ssl: { "rejectUnauthorized": false }
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
