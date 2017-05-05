console.log('---env.js---');

let VCAP;

// PRODUCTION CREDENTIALS
// Check for VCAP_SERVICES on the server
if (process.env.VCAP_SERVICES) {
  console.log('in VCAP if check');
  VCAP = JSON.parse(process.env.VCAP_SERVICES);
}
// LOCAL DEVELOPMENT
// Check for local credentials; log error if it fails
else {
  try {
    VCAP = require('./env.json');
  } catch (e) {
    console.error(e);
  }
};

console.log('VCAP: ', VCAP);
console.log('NODE_ENV: ', NODE_ENV);

// Export our data-sources for convenience
let DATASOURCES = {
  "db": {
    "url": VCAP.cloudantNoSQLDB[0].credentials.url,
    "database": "band-app",
    "name": "db",
    "connector": "cloudant"
  }
};

module.exports = { VCAP, DATASOURCES };
