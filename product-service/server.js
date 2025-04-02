const express = require('express');
require('./models');
const productRoutes = require('./routes/productRoutes');
const app = express();
app.use(express.json());
app.use('/products', productRoutes);
const sequelize = require('./config/database');
sequelize.sync().then(() => console.log('User DB synced'));
app.listen(process.env.PORT, () => console.log('Product Service running on port 3002'));