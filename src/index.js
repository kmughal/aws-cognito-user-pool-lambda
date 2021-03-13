("use strict");

require("dotenv").config();
global.fetch = require("node-fetch");
const { setupNewAccount } = require("./setupNewAccount");
module.exports.setupNewAccount = setupNewAccount;
