// Heroku to Directus mappings
module.exports = {
  DB_CONNECTION_STRING:
    process.env.DB_CONNECTION_STRING || process.env.DATABASE_URL,
  EMAIL_FROM: process.env.EMAIL_FROM || process.env.MAILGUN_SMTP_LOGIN
};
