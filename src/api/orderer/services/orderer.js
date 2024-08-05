'use strict';

/**
 * orderer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::orderer.orderer');
