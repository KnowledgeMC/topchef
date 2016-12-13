var _ = require('lodash');

var localEnvVars = {
  TITLE:      'topchef',
  SAFE_TITLE: 'topchef'
};


// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
