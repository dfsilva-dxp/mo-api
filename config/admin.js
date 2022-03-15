module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9a7af21cf7524a52f80eda27bbba98b1'),
  },
});
