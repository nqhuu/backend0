const path = require('path');
const express = require('express'); //common.js
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express(); //app express
const port = 8081; //port 

const routes = require('./routes');

// file tĩnh static
app.use(express.static(path.join(__dirname, 'public')));

//xử lý dữ liệu để gửi lên server
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());

//HTTP logger
app.use(morgan('combined'));

//template engine (handlerbars)
app.engine('hbs', engine({
    extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// khai báo route
// Routes init
routes(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});