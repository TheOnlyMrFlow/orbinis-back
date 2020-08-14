module.exports = {
  provider: "google-cloud-storage",
  providerOptions: {
    serviceAccount: {
      type: "service_account",
      project_id: `${process.env.GCS_PROJECT_ID}`,
      private_key_id: `${process.env.GCS_PRIVATE_KEY_ID}`,
      private_key: `${process.env.GCS_PRIVATE_KEY.replace('\\n', '\n').replace(/\n\s+/g, "\n")}`,
      client_email: `${process.env.GCS_CLIENT_EMAIL}`,
      client_id: `${process.env.GCS_CLIENT_ID}`,
      auth_uri: `${process.env.GCS_AUTH_URI}`,
      token_uri: `${process.env.GCS_TOKEN_URI}`,
      auth_provider_x509_cert_url: `${process.env.GCS_AUTH_PROVIDER_CERT_URL}`,
      client_x509_cert_url: `${process.env.GCS_CLIENT_CERT_URL}`
    },    
    bucketName: `${process.env.GCS_BUCKET_NAME}`,
    baseUrl: `${process.env.GCS_BUCKET_BASE_URL}`,
    basePath: "/",
    publicFiles: true
  }
};

  