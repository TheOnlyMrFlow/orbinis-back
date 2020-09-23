'use strict';

/**
 * A set of functions called "actions" for `contact-us`
 */

module.exports = {
  post: async (ctx, next) => {
    try {
      const reqBody = ctx.request.body;
      await sendFeedbackToCustomer(reqBody.customerName, reqBody.customerAddress,reqBody.customerMessage)
      await notifyOrbinisStaff(reqBody.customerName, reqBody.customerAddress,reqBody.customerMessage)
    } catch (err) {
      ctx.body = err;
      ctx.status = 500;
    }
  }
};

async function sendFeedbackToCustomer(customerName, customerAddress, customerMessage) {
    return strapi.plugins['email'].services.email.send({
      to: customerAddress,
      from: process.env.MAIL_SENDER_ADDRESS,
      replyTo: process.env.MAIL_SENDER_ADDRESS,
      subject: 'We received your contact request !',
      html: `
      <p>Hey ${customerName} ! We received your contact request and will get back to you soon !</p>
      <p>Your message was : </p>
      <p><em>${customerMessage}</em></p>
      `
    });
}

async function notifyOrbinisStaff(customerName, customerAddress, customerMessage) {
  return strapi.plugins['email'].services.email.send({
    to: process.env.MAIL_SENDER_ADDRESS,
    from: process.env.MAIL_NOTIFIER_ADDRESS,
    replyTo: process.env.MAIL_NOTIFIER_ADDRESS,
    subject: `${customerName} a envoyé une demande de contact`,
    html: `
    <p>${customerName} a envoyé une demande de contact avec le message suivant : </p>
    <p><em>${customerMessage}</em></p>
    <p>Son adresse est : ${customerAddress}</p>
    `
  });
}
