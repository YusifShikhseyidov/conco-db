'use strict';

/**
 * orderer controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::orderer.orderer');
