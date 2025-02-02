const express = require("express");
const path = require("path");
const adminRouter = require("./routes/admin")
const shopRouter = require("./routes/shop")
const noPageRouter = require("./routes/noPage")
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/admin", adminRouter);
app.use(shopRouter);

app.use(noPageRouter);
app.listen(3000);
