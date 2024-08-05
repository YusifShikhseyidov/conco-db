'use strict';

/**
 * orderer router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::orderer.orderer');
