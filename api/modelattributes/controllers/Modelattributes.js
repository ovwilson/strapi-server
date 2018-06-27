'use strict';

/**
 * Modelattributes.js controller
 *
 * @description: A set of functions called "actions" for managing `Modelattributes`.
 */

module.exports = {

  /**
   * Retrieve modelattributes records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.modelattributes.fetchAll(ctx.query);
  },

  /**
   * Retrieve a modelattributes record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.modelattributes.fetch(ctx.params);
  },

  /**
   * Count modelattributes records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.modelattributes.count(ctx.query);
  },

  /**
   * Create a/an modelattributes record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.modelattributes.add(ctx.request.body);
  },

  /**
   * Update a/an modelattributes record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.modelattributes.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an modelattributes record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.modelattributes.remove(ctx.params);
  }
};
