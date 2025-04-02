const express = require('express');
require('./models');
const userRoutes = require('./routes/userRoutes');
const app = express();
app.use(express.json());
app.use('/users', userRoutes);  
const sequelize = require('./config/database');
sequelize.sync().then(() => console.log('User DB synced'));
app.listen(process.env.PORT, () => console.log('User Service running on port 3001'));