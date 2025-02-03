const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// // setup for pug templete
// app.set("view engine", "pug");
// app.set("views", path.join(__dirname, "views"));

// setyo for ejs templette 
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render("404", { pageTitle: "page not found" });
});

app.listen(3000);
