const categoryRoute = require('./categoryRoute');
const userRoute = require('./userRoute');
const authRoute = require('./authRoute');
const wishlistRoute = require('./wishlistRoute');
const addressRoute = require('./addressRoute');
const productRoute =require('./productRoute');

const mountRoutes = (app) => {
  app.use('/api/categories', categoryRoute);
  app.use('/api/users', userRoute);
  app.use('/api/auth', authRoute);
  app.use('/api/wishlist', wishlistRoute);
  app.use('/api/addresses', addressRoute);
  app.use('/api/products',productRoute )
};

module.exports = mountRoutes;
