const express = require('express');
const SneaksAPI = require('sneaks-api');
const path = require('path');
const sneaks = new SneaksAPI();

const app = express();
const PORT = process.env.PORT || 5001; // Changed port to 5001

// Serve static files from the project root directory
app.use(express.static(path.join(__dirname, '../')));

// Route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/index.html'));
});

// Route for the products page
app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/products.html'));
});

// Route for the about page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/aboutus.html'));
});

app.get('/api/sneakers/:keyword', (req, res) => {
    const keyword = req.params.keyword;
    sneaks.getProducts(keyword, 10, (err, products) => {
        if (err) {
            console.error(`Error fetching products: ${err.message}`);
            res.status(500).json({ error: err.message });
        } else {
            res.json(products);
        }
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
