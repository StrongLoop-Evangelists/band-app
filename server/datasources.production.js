var env = JSON.parse(process.env.VCAP_SERVICES);

module.exports = {
  db: {
    connector: 'cloudant',
    url: env['cloudantNoSQLDB'][0].credentials.url,
    database: 'albums'
  }
};
