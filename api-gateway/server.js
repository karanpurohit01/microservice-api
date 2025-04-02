const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());
const dotenv = require('dotenv');

dotenv.config();

const USER_SERVICE_URL =  process.env.USER_SERVICE_URL;
const PRODUCT_SERVICE_URL = process.env.PRODUCT_SERVICE_URL;

app.use('/users', async (req, res) => {
    try {
        const response = await axios({ method: req.method, url: `${USER_SERVICE_URL}${req.url}`, data: req.body });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.use('/products', async (req, res) => {
    try {
        const response = await axios({ method: req.method, url: `${PRODUCT_SERVICE_URL}${req.url}`, data: req.body });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(process.env.PORT, () => console.log('API Gateway running'));