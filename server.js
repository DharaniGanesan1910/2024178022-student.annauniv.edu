const express = require('express');
const productRoutes = require('./src/routes/productRoutes');
const errorHandler = require('./src/middleware/errorHandler'); 

const app = express();
app.use(express.json());


app.use('/products', productRoutes);


app.use((req, res, next) => {
  const error = new Error('Route not found');
  error.statusCode = 404;
  next(error); 
});


app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
