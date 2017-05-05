let VCAP;

// PRODUCTION CREDENTIALS
// Check for VCAP_SERVICES on the server
if (process.env.VCAP_SERVICES) {
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
