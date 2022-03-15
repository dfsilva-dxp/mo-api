'use strict';

/**
 * often service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::often.often');
