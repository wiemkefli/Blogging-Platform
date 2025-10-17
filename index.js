const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const helmet = require('helmet');

// Use Helmet
// app.use(helmet());

// Use Cookies
const cookieParser = require('cookie-parser')

// Firebase initialization (centralized)
require('./firebase');



// Allow app to use static files
app.use(express.static(__dirname + '/public'));

// Use EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// App automatically reroutes to login upon entering /
app.get('/', (req, res) => {
    res.redirect('/login');
});

// Render views
app.get('/login', (req, res) => {
    res.render('login');
});
app.get('/register', (req, res) => {
    res.render('register');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Use JSON and Cookies
app.use(express.json());
app.use(cookieParser());

// API Routes
app.use("/user", require('./routes/userRoutes'));
app.use('/blog', require('./routes/blogRoutes'));
