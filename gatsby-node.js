// Operating via gatsby-node.esm.js to be able to use import queries

require = require('esm')(module);
module.exports = require('./gatsby-node.esm.js');
