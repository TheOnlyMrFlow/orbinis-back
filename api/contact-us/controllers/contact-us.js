'use strict';

/**
 * A set of functions called "actions" for `contact-us`
 */

module.exports = {
  post: async (ctx, next) => {
    try {
      ctx.body = 'ok';
      console.log('Before mail');
      await strapi.plugins['email'].services.email.send({
        to: 'comte.florian@gmail.com',
        from: 'comte.florian@gmail.com',
        //cc: 'helenedarroze@strapi.io',
        //bcc: 'ghislainearabian@strapi.io',
        replyTo: 'comte.florian@gmail.com',
        subject: 'Email working',
        text: 'Hello world!',
        html: 'Hello world!',
      });
      console.log('After mail');
    } catch (err) {
      ctx.body = err;
    }
  }
};
