module.exports = ({ env }) => ({
    email: {
      provider: "mailjet",
      providerOptions: {
        publicApiKey: env("MAILJET_PUBLIC_API_KEY"),
        secretApiKey: env("MAILJET_SECRET_API_KEY"),
      },
      settings: {
        defaultFrom: "comte.florian@gmail.com",
        defaultFromName: "Orbinis",
        defaultTo: "comte.florian@gmail.com",
        defaultToName: "Florian Comte",
      }
    }
    // ...
  });